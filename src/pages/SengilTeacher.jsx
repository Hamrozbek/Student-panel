import { useParams } from "react-router-dom"
import { teacherlist } from "./Teachers"
import { StudentList } from "./Students"
import StudentCard from "../components/StudentCard"

const SengilTeacher = () => {
    const { id } = useParams()
    const teacherId = parseInt(id)
    const singleTeacherData = teacherlist.find(item => item.id == teacherId)
    const studentOfTeacher = StudentList.filter(student => student.teacherId == teacherId)

    return (
        <div>
            {/* Teacher Info */}
            <div className="flex justify-center">
                <div className="cursor-pointer flex items-center gap-4 rounded-[15px] mt-4 px-4 py-2 bg-[#333333]">
                    <img className="rounded-full w-[150px]" src={singleTeacherData.image} alt="teacher img" width={400} height={300}/>
                    <div>
                        <h2 className="text-white font-bold text-[18px]">{singleTeacherData.name} - {singleTeacherData.surname}</h2>
                        <p className="text-white">Email: {singleTeacherData.gmail}</p>
                        <p className="text-white font-semibold">Age: {singleTeacherData.age}</p>
                    </div>
                </div>
            </div>

            {/* Student List */}
            <div className="pt-1">
                <h2 className="text-center text-white text-[24px] font-bold pb-1">Students of {singleTeacherData.name}</h2>
                <div className="flex flex-wrap justify-center gap-4">
                    {studentOfTeacher.length > 0 ? ( studentOfTeacher.map(student => <StudentCard key={student.id} item={student} />)) : (<p className="text-black">Student yuq</p>)}
                </div>
            </div>
        </div>
    )
}

export default SengilTeacher
