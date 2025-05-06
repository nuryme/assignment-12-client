import SectionTitleFlower from "../../shared components/SectionTitleFlower";

const MyContactRequest = () => {
  return (
    <div>
      <SectionTitleFlower title="my contact request"></SectionTitleFlower>

      <div className="mt-12">
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs">
            <thead className="bg-primary text-white">
              <tr className="text-left uppercase">
                <th className="p-3"># id</th>
                <th className="p-3">name</th>
                <th className="p-3">number</th>
                <th className="p-3">email</th>
                <th className="p-3">Status</th>
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
                <td className="p-3 text-left">
                  <span className="px-3 py-1 font-semibold rounded-md bg-secondary">
                    <span>Pending</span>
                  </span>
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

export default MyContactRequest;
