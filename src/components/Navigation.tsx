import { NavLink } from "@/components/NavLink";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Sparkles, FileText, Video, History, User, Menu } from "lucide-react";

export const Navigation = () => {
  return (
    <nav className="border-b bg-card/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">
              CV<span className="text-primary">Pro</span>
            </span>
          </NavLink>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            <NavLink
              to="/"
              end
              className="px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all"
              activeClassName="text-foreground bg-muted"
            >
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                <span>Optimiser</span>
              </div>
            </NavLink>

            <NavLink
              to="/history"
              className="px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all"
              activeClassName="text-foreground bg-muted"
            >
              <div className="flex items-center gap-2">
                <History className="w-4 h-4" />
                <span>Historique</span>
              </div>
            </NavLink>

            <NavLink
              to="/questions"
              className="px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all"
              activeClassName="text-foreground bg-muted"
            >
              <div className="flex items-center gap-2">
                <Video className="w-4 h-4" />
                <span>Interview</span>
              </div>
            </NavLink>
          </div>

          {/* Profile Button (Desktop) */}
          <div className="hidden md:block">
            <NavLink to="/profile">
              <Button variant="ghost" size="icon" className="rounded-full">
                <User className="w-5 h-5" />
              </Button>
            </NavLink>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col gap-4 mt-8">
                  <NavLink
                    to="/"
                    end
                    className="px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all"
                    activeClassName="text-foreground bg-muted"
                  >
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      <span>Optimiser</span>
                    </div>
                  </NavLink>

                  <NavLink
                    to="/history"
                    className="px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all"
                    activeClassName="text-foreground bg-muted"
                  >
                    <div className="flex items-center gap-2">
                      <History className="w-4 h-4" />
                      <span>Historique</span>
                    </div>
                  </NavLink>

                  <NavLink
                    to="/questions"
                    className="px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all"
                    activeClassName="text-foreground bg-muted"
                  >
                    <div className="flex items-center gap-2">
                      <Video className="w-4 h-4" />
                      <span>Interview</span>
                    </div>
                  </NavLink>

                  <NavLink
                    to="/profile"
                    className="px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all"
                    activeClassName="text-foreground bg-muted"
                  >
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>Profil</span>
                    </div>
                  </NavLink>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};
