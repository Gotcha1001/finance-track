"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import CreateTransactionDialog from "./CreateTransactionDialog";
import Overview from "./Overview";
import History from "./History";

type SerializedUser = {
  id: string;
  firstName: string | null;
  lastName: string | null;
  imageUrl: string;
};

export default function DashboardClient({
  user,
  userSettings,
}: {
  user: SerializedUser;
  userSettings: any;
}) {
  return (
    <div className="h-full bg-background">
      <div className="border-b bg-card gradient-background2">
        <div className="container flex flex-wrap items-center justify-between gap-6 py-8 px-2 mx-auto">
          <div className="flex items-center">
            <p className="text-3xl font-bold">Hello, {user.firstName}</p>
            <img
              src={user.imageUrl}
              alt="User Image"
              className="ml-4 h-14 w-14 rounded-full"
            />
          </div>
          <div className="flex items-center gap-3">
            <CreateTransactionDialog type="income">
              <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Button
                  variant={"outline"}
                  className="border-emerald-500 bg-emerald-950 text-white hover:bg-emerald-700 hover:text-white"
                >
                  New Income
                </Button>
              </motion.div>
            </CreateTransactionDialog>
            <CreateTransactionDialog type="expense">
              <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Button
                  variant={"outline"}
                  className="border-rose-500 bg-rose-950 text-white hover:bg-rose-700 hover:text-white ml-3"
                >
                  New Expense
                </Button>
              </motion.div>
            </CreateTransactionDialog>
          </div>
        </div>
      </div>
      <Overview userSettings={userSettings} />
      <History userSettings={userSettings} />
    </div>
  );
}
