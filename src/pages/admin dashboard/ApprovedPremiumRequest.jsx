import React from "react";
import SectionTitleUnderline from "../../shared components/SectionTitleUnderline";

const ApprovedPremiumRequest = () => {
  return (
    <div>
      <SectionTitleUnderline
        before="approved"
        underline="premium"
        after="request"
      ></SectionTitleUnderline>

      <div className="mt-12">
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs">
            <thead className="bg-primary text-white">
              <tr className="text-left uppercase">
                <th className="p-3">id</th>
                <th className="p-3">name</th>
                <th className="p-3">email</th>
                <th className="p-3">action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-opacity-20 border-primary bg-secondary/30">
                <td className="px-3 py-6">
                  <p>234</p>
                </td>
                <td className="px-3 py-6">
                  <p>Microsoft Corporation</p>
                </td>
                <td className="px-3 py-6">
                  <p>example@gmail.com</p>
                </td>
                <td className="px-3 py-6 text-left">
                  <span className="px-3 py-1 font-semibold  cursor-pointer rounded-md bg-secondary">
                    <span>make premium</span>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ApprovedPremiumRequest;
