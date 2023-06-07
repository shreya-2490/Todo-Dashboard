import DisplayTodos from "../DisplayTodos"
import Todos from "../Todos"
import "../../styles/main.css"
import { motion } from "framer-motion"
const Home = () => {
  return (
    <>
      <div className="home">
        <motion.h1
          initial={{ y: -200 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", duration: 0.5 }}
          whileHover={{ scale: 1.1 }}
        >
          {" "}
          Todo App
        </motion.h1>
        <motion.div
          initial={{ y: 1000 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", duration: 1 }}
        >
          <Todos />
          <DisplayTodos />
        </motion.div>
      </div>
    </>
  )
}
export default Home
