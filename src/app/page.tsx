import { notionApi } from "@/libs/api";
import { priceFormatter } from "@/utils/formatter";
import { z } from "zod";

import Header from "@/components/Header";
import Footer from "@/components/footer";

export const revalidate = 60

const cardapioSchema = z.object({
  results: z.array(z.object({
    id: z.string(),
    properties: z.object({
      "Description": z.object({
        rich_text: z.array(z.object({
          text: z.object({
            content: z.string(),
          })
        }))
      }),
      "Valor": z.object({
        number: z.number()
      }),
      "Nome": z.object({
        title: z.array(z.object({
          text: z.object({
            content: z.string()
          })
        }))
      }),
      "Categoria": z.object({
        select: z.object({
          name: z.string()
        })
      })
    })
  })).transform(
    results => {
      return results.map(results => {
        return {
          id: results.id,
          name: results.properties.Nome.title[0].text.content,
          description: results.properties.Description.rich_text[0].text.content,
          value: results.properties.Valor.number,
          category: results.properties.Categoria.select.name,
        }
      })
    }
  )
})

export default async function Home() {

  const databaseId = process.env.NOTION_DATABASE_ID

  const response = await notionApi.post(`/databases/${databaseId}/query`, {
    sorts: [
      {
        property: "Valor",
        direction: "ascending"
      }
    ]
  })

  const { results } = cardapioSchema.parse(response.data)

  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center p-6 lg:px-20 gap-4">
        <div className="w-full">
          <h3 className="text-xl text-center font-semibold">Bebidas quentes</h3>
          <table className="w-full border-separate border-spacing-x-0 border-spacing-y-2 mt-6">
            <tbody>
              {results.map(item => {
                return (
                  <tr key={item.id}>
                    <td className="px-5 py-5 bg-primary rounded-l-md text-white">
                      <span className="font-medium">{item.name}</span>
                      <br />
                      <span className="font-light">{item.description}</span>
                    </td>
                    <td className="px-5 py-5 bg-primary rounded-r-md text-white">{priceFormatter.format(item.value / 100)}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </main>
      <Footer />
    </>
  )
}
