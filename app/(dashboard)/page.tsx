import { Button } from "@/components/ui/button";
import prisma from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import CreateTransactionDialog from "./_components/CreateTransactionDialog";
import Overview from "./_components/Overview";
import History from "./_components/History";

async function page() {
  const user = await currentUser();
  if (!user) {
    redirect("/sign-in");
  }

  // get the user settings from prisma useSettings
  const userSettings = await prisma.userSettings.findUnique({
    where: {
      userId: user.id,
    },
  });

  if (!userSettings) {
    redirect("/wizard");
  }

  return (
    <div className="h-full bg-background ">
      <div className="border-b bg-card gradient-background2   ">
        <div className="container flex flex-wrap items-center justify-between gap-6 py-8 px-2 mx-auto  ">
          <div className="flex items-center ">
            <p className="text-3xl font-bold">Hello, {user.firstName}</p>
            <img
              src={user.imageUrl}
              alt="User Image"
              className="ml-4 h-14 w-14 rounded-full"
            />
          </div>
          <div className="flex items-center gap-3">
            <CreateTransactionDialog type="income">
              <Button
                variant={"outline"}
                className="border-emerald-500 bg-emerald-950 text-white hover:bg-emerald-700 hover:text-white"
              >
                New Income
              </Button>
            </CreateTransactionDialog>
            <CreateTransactionDialog type="expense">
              <Button
                variant={"outline"}
                className="border-rose-500 bg-rose-950 text-white hover:bg-rose-700 hover:text-white"
              >
                New Expense
              </Button>
            </CreateTransactionDialog>
          </div>
        </div>
      </div>
      <Overview userSettings={userSettings} />
      <History userSettings={userSettings} />
    </div>
  );
}

export default page;
