"use client";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import PageVeiwer from "./page-veiwer";
import { ArrowBigUpDash, Loader } from "lucide-react";
import { motion } from "framer-motion";
import type { PageType } from "@/types/page";
import { useState } from "react";
import axios from "axios";
import { useToast } from "@/components/ui/use-toast";
import { QueryObserverResult, RefetchOptions } from "@tanstack/react-query";

export function PageModal({
  children,
  page_id = 0,
  is_voting = false,
  allpages = [],
  refetch,
}: {
  children: React.ReactNode;
  page_id?: number;
  is_voting?: boolean;
  allpages?: PageType[];
  refetch?: (
    options?: RefetchOptions
  ) => Promise<QueryObserverResult<any, Error>>;
}) {
  const [currentPage, setCurrentPage] = useState(page_id);
  const { toast } = useToast();
  const [isSendingVote, setIsSendingVote] = useState(false);

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

  const handleVote = async () => {
    if (allpages.length === 0) return;

    const page = allpages[currentPage];

    const postBackendVote = async () => {
      try {
        setIsSendingVote(true);

        const { data, status } = await axios.post(
          `http://127.0.0.1:5000/story/${page.page_id}/vote`
        );
        if (status === 200) {
          toast({
            title: "Success",
            description: data.msg,
          });
          refetch && (await refetch());
          setIsSendingVote(false);
        }
      } catch (error) {
        toast({
          title: "Error",
          description: error.response.data.msg,
          variant: "destructive",
        });
        setIsSendingVote(false);
      }
    };

    await postBackendVote();
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
          setCurrentPage={setCurrentPage}
        />
        {is_voting && (
          <DialogFooter>
            <motion.div variants={arrowVariants} animate="move">
              {isSendingVote ? (
                <Loader className="animate-spin w-6 h-6 bottom-2 right-2" />
              ) : (
                <ArrowBigUpDash
                  className="opacity-40 w-6 h-6 bottom-2 right-2 hover:opacity-100"
                  onClick={handleVote}
                />
              )}
            </motion.div>
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  );
}
