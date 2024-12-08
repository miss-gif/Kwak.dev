import AdminAuthButton from "@/components/Button/Admin-Auth-Button";
import UserAuthButton from "@/components/Button/User-Auth-Button";
import StickyWrapper from "@/components/common/StickyWrapper";
import { Button } from "@/components/ui/button";
import useProjectDelete from "@/hooks/project/use-Project-Delete";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { PencilIcon, Trash2Icon } from "lucide-react";
import { Link, useNavigate, useParams } from "react-router-dom";

const ProjectDetailHeader = () => {
  const navigete = useNavigate();
  const { id } = useParams();
  const { handleDelete } = useProjectDelete();

  return (
    <StickyWrapper>
      <div className="flex items-center justify-between">
        <Button size="icon" asChild>
          <Link to="/project">
            <ArrowBackIosNewIcon />
          </Link>
        </Button>

        <div className="flex items-center justify-between gap-1">
          <UserAuthButton
            label={
              <>
                <PencilIcon /> Project Edit
              </>
            }
            onClick={() => {
              navigete(`/project/${id}/edit`); // 수정 페이지로 이동
            }}
          />
          <AdminAuthButton
            label={
              <>
                <Trash2Icon />
                Del
              </>
            }
            color="red"
            onClick={handleDelete}
          />
        </div>
      </div>
    </StickyWrapper>
  );
};

export default ProjectDetailHeader;
