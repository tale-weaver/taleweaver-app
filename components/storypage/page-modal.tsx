import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import PageVeiwer from "./page-veiwer";

export function PageModal({
  children,
  page_id = 0,
}: {
  children: React.ReactNode;
  page_id?: number;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-[800px] max-h-[90vh] bg-transparent border-none shadow-none">
        <DialogHeader>
          <DialogTitle></DialogTitle>
        </DialogHeader>
        <PageVeiwer className="rounded-xl" page_id={page_id} />
        <DialogFooter>hahaha</DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
