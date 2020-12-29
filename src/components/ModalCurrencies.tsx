import React, { useContext } from "react";
import { Store } from "../store";
import { currencies, money } from "./arrayCurrencies";
const Modal: React.FC = () => {
  const globalState = useContext(Store);
  const { dispatch } = globalState;
  const { modalOpen } = globalState.state;

  const closeModal = () => {
    dispatch({ type: "CLOSEMODAL" });
  };
  const chooseCurrency = (code: string) => {
    dispatch({ type: code });
    closeModal();
  };

  const open = !modalOpen ? "hidden" : "block";

  return (
    <div
      className={`fixed z-10 inset-0 overflow-y-auto transition-all duration-1000 ${open} `}
    >
      <div className="flex items-center justify-center min-h-screen pt-4 px-4   text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <div
          className="inline-block align-bottom bg-primaryBG border-2 border-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <svg
            onClick={() => {
              closeModal();
            }}
            className="ml-auto fill-current  text-primaryTXT w-5 h-5 cursor-pointer mt-4 mr-4 "
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 18 18"
          >
            <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z" />
          </svg>

          <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start justify-center	flex">
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <div className="flex flex-col h-auto">
                  <div className="flex-grow overflow-auto  	">
                    <table className="relative w-full border  ">
                      <tbody className="divide-y">
                        {currencies.map((item: money, index: number) => (
                          <tr
                            key={index}
                            className="cursor-pointer"
                            onClick={() => chooseCurrency(item.code)}
                          >
                            <td className="px-6 py-4 text-left">
                              <div className="h-8 w-8 border border-gray-300">
                                <img
                                  src={require(`../images/${item.code}.png`)}
                                />
                              </div>
                            </td>
                            <td className="px-6 py-4 text-left  text-primaryTXT">
                              {item.code} - {item.name}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
