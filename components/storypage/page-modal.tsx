import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import PageVeiwer from "./page-veiwer";
import { ArrowBigUpDash } from "lucide-react";
import { motion } from "framer-motion";
import type { PageType } from "@/types/page";

export function PageModal({
  children,
  page_id = 0,
  is_voting = false,
  allpages = [],
}: {
  children: React.ReactNode;
  page_id?: number;
  is_voting?: boolean;
  allpages?: PageType[];
}) {
  const arrowVariants = {
    move: {
      y: [0, -20, 0],
      transition: {
        duration: 1,
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
  };
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-[800px] max-h-[90vh] bg-transparent border-none shadow-none">
        <DialogHeader>
          <DialogTitle></DialogTitle>
        </DialogHeader>
        <PageVeiwer
          className="rounded-xl"
          page_id={page_id}
          allpages={allpages}
        />
        {is_voting && (
          <DialogFooter>
            <motion.div variants={arrowVariants} animate="move">
              <ArrowBigUpDash className="opacity-40 w-6 h-6 bottom-2 right-2 hover:opacity-100" />
            </motion.div>
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  );
}
