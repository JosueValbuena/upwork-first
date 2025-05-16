import {
  AlertDialog,
  AlertDialogAction,
  /* AlertDialogCancel, */
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  /* AlertDialogTrigger, */
} from "@/components/ui/alert-dialog"

interface ModalInfo {
  isOpen: boolean,
  title: string,
  message: string,
  img: string
}

interface ModalCustom {
  modalInfo: ModalInfo,
  onAccept: () => void
};

const ModalCustom = ({ modalInfo, onAccept }: ModalCustom) => {
  return (
    <AlertDialog onOpenChange={onAccept} open={modalInfo.isOpen}>
      {/* <AlertDialogTrigger>Open</AlertDialogTrigger> */}
      <AlertDialogContent className="bg-background-primary-customized">
        <AlertDialogHeader>
          <AlertDialogTitle>{modalInfo.title}</AlertDialogTitle>
          <AlertDialogDescription>
            {modalInfo.message}
            {modalInfo?.img && (
              <div>
                <img src={modalInfo.img} alt="img" className="text-center mx-auto my-3" />
              </div>
            )}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          {/* <AlertDialogCancel>Cancel</AlertDialogCancel> */}
          <AlertDialogAction className="bg-violet-600 text-white">Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default ModalCustom