import { UserCard } from "./components/UserCard";
import "./styles.css";

const user = {
  id: 1,
  name: "じゃけえ",
  email: "121@com",
  address: "ADDRESSSSSSS"
};

export default function App() {
  return (
    <div className="App">
      <UserCard user={user} />
    </div>
  );
}
