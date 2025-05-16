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
  message: string
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