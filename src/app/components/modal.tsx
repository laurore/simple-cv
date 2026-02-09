import Link from "next/link";

type Props = {
    show: boolean
    children: string | JSX.Element | JSX.Element[]
  }

function Modal({show, children}: Props) {
    return (
        <>
        {show &&
            <dialog
                className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-auto backdrop-blur flex justify-center items-center">
                <div className="bg-white m-auto p-8">
                    <div className="flex flex-col items-center">
                        {children}
                        <br/>
                        <Link href="/">
                            <button type="button" className="btn bg-red-500 text-white p-2">Close</button>
                        </Link>
                    </div>
                </div>
            </dialog>
        }
    </>
    );
}

export default Modal;