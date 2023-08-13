import Header from "@/components/Header";
import Footer from "@/components/footer";

import cardapio from "@/data.json";
import { priceFormatter } from "@/utils/formatter";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center p-6 lg:p-24 gap-4">
        <Header />
        <div className="w-full">
          <h3 className="text-xl">Bebidas quentes</h3>
          <table className="w-full border-separate border-spacing-x-0 border-spacing-y-2 mt-6">
            <tbody>
              {cardapio.map(item => {
                return (
                  <tr key={item.id}>
                    <td className="px-5 py-5 bg-primary rounded-l-md text-white">
                      <span className="font-medium">{item.item}</span>
                      <br />
                      <span className="font-light">{item.details}</span>
                    </td>
                    <td className="px-5 py-5 bg-primary rounded-r-md text-white">{priceFormatter.format(item.price / 100)}</td>
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
