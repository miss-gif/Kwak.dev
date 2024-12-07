import UserAuth from "@/components/Button/User-Auth";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import { Link } from "react-router-dom";

const ProjectListHeader = () => {
  return (
    <div className="my-4 flex justify-end">
      <UserAuth>
        <Button asChild>
          <Link to="add" className="flex items-center">
            <PlusIcon /> Project Add
          </Link>
        </Button>
      </UserAuth>
    </div>
  );
};

export default ProjectListHeader;
