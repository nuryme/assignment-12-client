import SectionTitleFlower from "../../shared components/SectionTitleFlower";

const MyFavorite = () => {
  return (
    <div>
      <SectionTitleFlower title="my favorite"></SectionTitleFlower>

      <div className="mt-12">
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs">
            <thead className="bg-primary text-white">
              <tr className="text-left uppercase">
                <th className="p-3"># id</th>
                <th className="p-3">name</th>
                <th className="p-3">permanent address</th>
                <th className="p-3">occupation</th>
                <th className="p-3 text-right">action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-opacity-20 border-primary bg-secondary/30">
                <td className="p-3">
                  <p>9</p>
                </td>
                <td className="p-3">
                  <p>Microsoft Corporation</p>
                </td>
                <td className="p-3">
                  <p>97412378923</p>
                </td>
                <td className="p-3">
                  <p className="dark:text-gray-600">example@gmail.com</p>
                </td>
                <td className="p-3 text-right">
                  <button className="primaryBtn py-1 px-3">delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyFavorite;
