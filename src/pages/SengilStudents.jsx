import { useParams } from "react-router-dom"
import { StudentList } from "./Students"
import { teacherlist } from "./Teachers"

const SengilStudents = () => {
    const { id } = useParams()
    const studentId = parseInt(id)

    const singleStudentData = StudentList.find(item => item.id == studentId)
    const teacher = teacherlist.find(tId => tId.id == singleStudentData.teacherId)

    return (
        <div className="containers">
            <div className="flex justify-center">
                <div className="rounded-[10px] flex gap-[20px] items-center py-[8px] px-[15px] bg-[#333]">
                    <img className="rounded-full w-[110px]" src={singleStudentData.img} alt="img" width={300} height={200} />
                    <div>
                        <h2 className="text-white font-bold">{singleStudentData.name} - {singleStudentData.surname}</h2>
                        <p className="text-white">Age: {singleStudentData.age}</p>
                    </div>
                </div>
            </div>
            {/* teacher */}
            <div>
                {teacher && (
                    <div className="bg-[#333] py-3 flex items-center gap-[20px] w-[400px] mx-auto mt-5 rounded-[10px] pl-5">
                        <img className="w-[120px] rounded-full" src={teacher.image} alt="teacher img" width={300} height={200} />
                        <div>
                            <h3 className="text-white font-bold">{teacher.name} - {teacher.surname}</h3>
                            <p className="text-white">Stack: {teacher.stack}</p>
                            <p className="text-white">Gmail: {teacher.gmail}</p>
                            <p className="text-white">Age: {teacher.age}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default SengilStudents
