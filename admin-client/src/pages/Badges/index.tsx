import React, { useState } from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";

import Button from "../../components/Button";
import Card from "../../components/Card";
import Layout from "../../components/Layout";
import Modal from "../../components/Modal";

export default function Badges() {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  return (
    <Layout>
      <Card label="Tüm Rozetler" className="relative">
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
                  İkon
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left font-medium text-gray-500 tracking-wider"
                >
                  Onaycılar
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left font-medium text-gray-500 tracking-wider"
                >
                  Gereksinimler
                </th>
                <th scope="col" className="relative px-6 py-3 rounded-tr-lg">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-gray-500">1</td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                  Fighter
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <img src="/images/uncommon-icon.png" alt="uncommon" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                  Erbuğ Kaya, Hasan Taşdelen
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                  <ul className="list-disc">
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </li>
                  </ul>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    className="mr-5 text-red-500"
                    onClick={() => setShowDeleteModal(true)}
                  >
                    <FiTrash2 size={25} />
                  </button>
                  <button className="text-blue-500">
                    <FiEdit size={25} />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>

      <Modal
        visible={showDeleteModal}
        className="w-[800px]"
        label="Emin misin?"
      >
        <p className="mb-3">
          Bu rozeti silmek istediğine emin misin? Bu işlem geri alınamaz.
        </p>
        <div className="flex gap-3 mt-3 flex-row-reverse">
          <Button
            type="danger"
            className="w-14"
            onClick={() => setShowDeleteModal(false)}
          >
            Sil
          </Button>
          <Button className="w-14" onClick={() => setShowDeleteModal(false)}>
            İptal
          </Button>
        </div>
      </Modal>
    </Layout>
  );
}
