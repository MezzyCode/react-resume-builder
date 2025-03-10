import { buttonVariants } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { Plus } from "lucide-react"
import { motion } from 'framer-motion'
import ResumeList from "../Resume"

const Home = () => {
  return (
    // mt-12 because that's the navbar size (h-12)
    <article className="pt-16 grid lg:grid-cols-2 min-h-dvh">
      <section className="prose prose-headings:text-foreground prose-p:text-foreground prose-h1:m-0 prose-h2:mt-0
      p-4 mx-auto">
        <motion.div
          initial={{ x: 70, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1>React Resume Builder</h1>
        </motion.div>
        <motion.div
          initial={{ x: 70, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h2>Create Your Perfect Resume with Ease</h2>
        </motion.div>
        <motion.div
          initial={{ x: 70, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <p>Build a professional, tailored resume in minutes with React Resume Builder!<br />
            No more hassle. No more templates. Just a fast, intuitive, and easy-to-use tool to get your resume ready for success!
          </p>
          {/* <Button onClick={() => Navigate('/resume/create')}>
          Create Resume
        </Button> */}
        </motion.div>
        <motion.div
          initial={{ x: 70, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.7 }}
        >
          <div className="not-prose">
            <Link className={buttonVariants()} to={'/resume/create'}>
              Create Resume
            </Link>
          </div>
        </motion.div>
      </section>
      <section className="p-4">
        <h2 className="font-bold text-2xl inline-block mr-4">Created Resume</h2>
        <Link className={buttonVariants({ variant: "outline" })} to={'/resume/create'}>
          <Plus />
        </Link>
        <ResumeList />
      </section>
    </article>
  )
}

export default Home