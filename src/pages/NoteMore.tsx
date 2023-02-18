import {
  Navigate,
  Outlet,
  useOutletContext,
  useParams,
} from "react-router-dom";
import { Note } from "../App";

type NoteMoreProps = {
  notes: Note[];
};

const NoteMore = ({ notes }: NoteMoreProps) => {
  const { id } = useParams();
  const note = notes.find((n) => n.id === id);

  if (note == null) return <Navigate to="/" replace />;

  return <Outlet context={note} />;
};

export default NoteMore;

export function useNote() {
  return useOutletContext<Note>();
}
