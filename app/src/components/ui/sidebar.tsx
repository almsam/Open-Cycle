// components/ui/sidebar.tsx

import { Home, NotebookPen, Settings, LogOut, CircleUser } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import { ModeToggle } from "./mode-toggle";
import { Capacitor } from "@capacitor/core";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { toast } from "sonner";

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const isAndroid = Capacitor.getPlatform() === "android";
  const pathname = location.pathname;
  const isActive = (path: string) => pathname.includes(path);

  function deleteAccount() {
    toast("Your account has been deleted successfully.");
    navigate("login");
  }

  function signout() {
    toast("you have been successfully logged out.");
    navigate("login");
  }

  return (
    <div
      className={`p-4 space-y-4 ${
        isAndroid
          ? "bottom-0 w-screen h-52 border-t"
          : "top-0 left-0 w-[200px] h-screen border-r"
      }`}
    >
      <h2 className="text-xl font-bold text-[#a30262]">Open Cycle</h2>

      <nav className={`space-y-2 ${isAndroid ? "flex" : "flex flex-col"}`}>
        <Dialog>
          <form className="flex justify-start">
            <DialogTrigger asChild>
              <Button variant="ghost">
                <CircleUser className="mr-2 h-5 w-5" />
                Profile
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Your profile</DialogTitle>
              </DialogHeader>
              <span>Name</span>
              <span>Date Created</span>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button
                    variant="outline"
                    className="justify-start w-30"
                    size="sm"
                  >
                    <LogOut className="mr-2 h-5 w-5" />
                    Sign out
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Are you sure you want to sign out?
                    </AlertDialogTitle>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={() => signout()}>
                      Sign Out
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="outline" className="w-30 text-red-600">
                    Delete Account
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Are you absolutely sure you want to delete your account?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently delete
                      your account and remove your data from our servers.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={() => deleteAccount()}>
                      Delete account
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </DialogContent>
          </form>
        </Dialog>

        <Button
          variant="ghost"
          className={`justify-start ${
            isActive("home") ? "font-bold text-[#a30262]" : ""
          }${isAndroid ? "flex flex-col" : ""}`}
          onClick={() => navigate("home")}
        >
          <Home className="mr-2 h-5 w-5" />
          Home
        </Button>
        <Button
          variant="ghost"
          className={`justify-start ${
            isActive("note") ? "font-bold text-[#a30262]" : ""
          }${isAndroid ? "flex flex-col" : ""}`}
          onClick={() => navigate("note")}
        >
          <NotebookPen className="mr-2 h-5 w-5" />
          Note
        </Button>
        <Button
          variant="ghost"
          className={`justify-start ${
            isActive("setting") ? "font-bold text-[#a30262]" : ""
          }${isAndroid ? "flex flex-col" : ""}`}
          onClick={() => navigate("settings")}
        >
          <Settings className="mr-2 h-5 w-5" />
          Settings
        </Button>
        <ModeToggle />
        <Button
          variant="ghost"
          className={`justify-start ${isAndroid ? "flex flex-col" : ""}`}
          onClick={() => navigate("signout")}
        >
          <LogOut className="mr-2 h-5 w-5" />
          Sign out
        </Button>
      </nav>
    </div>
  );
}
