import React from "react";

import Card from "../components/Card";
import Layout from "../components/Layout";

export default function Ranks() {
  return (
    <Layout>
      <Card label="Sıralamalar">
        <div className="border rounded-lg mt-5">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left font-medium text-gray-500 tracking-wider rounded-tl-lg"
                >
                  No
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left font-medium text-gray-500 tracking-wider"
                >
                  Ad
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left font-medium text-gray-500 tracking-wider"
                >
                  Görev
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left font-medium text-gray-500 tracking-wider"
                >
                  Skor
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="font-semibold">
                <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                  <div className="w-10 h-10 rounded-full bg-[#FFD700] text-white font-semibold flex justify-center items-center">
                    1
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-500 font-semibold flex items-center gap-5">
                  <img
                    src="/images/comment-example.jpg"
                    alt="example"
                    className="rounded-full w-10 h-10"
                  />
                  <div>Mustafa Çağatay Tulun</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                  IMS Altyapı Bölüm Müdürü
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                  45
                </td>
              </tr>
              <tr className="font-semibold">
                <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                  <div className="w-10 h-10 rounded-full bg-[#C0C0C0] text-white font-semibold flex justify-center items-center">
                    2
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-500 font-semibold flex items-center gap-5">
                  <img
                    src="/images/comment-example.jpg"
                    alt="example"
                    className="rounded-full w-10 h-10"
                  />
                  <div>Mustafa Çağatay Tulun</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                  IMS Altyapı Bölüm Müdürü
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                  45
                </td>
              </tr>
              <tr className="font-semibold">
                <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                  <div className="w-10 h-10 rounded-full bg-[#CD7F32] text-white font-semibold flex justify-center items-center">
                    3
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-500 font-semibold flex items-center gap-5">
                  <img
                    src="/images/comment-example.jpg"
                    alt="example"
                    className="rounded-full w-10 h-10"
                  />
                  <div>Mustafa Çağatay Tulun</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                  IMS Altyapı Bölüm Müdürü
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                  45
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                  <div className="w-10 h-10 bg-transparent flex justify-center items-center">
                    4
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-500 font-semibold flex items-center gap-5">
                  <img
                    src="/images/comment-example.jpg"
                    alt="example"
                    className="rounded-full w-10 h-10"
                  />
                  <div>Mustafa Çağatay Tulun</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                  IMS Altyapı Bölüm Müdürü
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                  45
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                  <div className="w-10 h-10 bg-transparent flex justify-center items-center">
                    5
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-500 font-semibold flex items-center gap-5">
                  <img
                    src="/images/comment-example.jpg"
                    alt="example"
                    className="rounded-full w-10 h-10"
                  />
                  <div>Mustafa Çağatay Tulun</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                  IMS Altyapı Bölüm Müdürü
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                  45
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>
    </Layout>
  );
}
