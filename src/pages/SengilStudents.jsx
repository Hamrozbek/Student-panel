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
                <div className="rounded-[10px] flex gap-2 md:gap-[20px] items-center py-[4px] md:py-[8px] px-[8px] md:px-[15px] bg-[#333]">
                    <img className="rounded-full w-[60px] md:w-[110px]" src={singleStudentData.img} alt="img" width={300} height={200} />
                    <div>
                        <h2 className="text-white font-bold md:text-[18px] text-[15px]">{singleStudentData.name} - {singleStudentData.surname}</h2>
                        <p className="text-white text-[14px] md:text-[18px]">Age: {singleStudentData.age}</p>
                    </div>
                </div>
            </div>
            {/* teacher */}
            <div>
                {teacher && (
                    <div className="bg-[#333] py-[6px] md:py-3 flex items-center gap-2 md:gap-[20px] w-[300px] md:w-[400px] mx-auto mt-5 rounded-[10px] px-2 md:pl-5">
                        <img className="w-[80px] md:w-[120px] rounded-full" src={teacher.image} alt="teacher img" width={300} height={200} />
                        <div>
                            <h3 className="text-white font-bold">{teacher.name} - {teacher.surname}</h3>
                            <p className="text-white text-[14px] md:text-[18px]">Stack: {teacher.stack}</p>
                            <p className="text-white text-[13px] md:text-[18px]">Gmail: {teacher.gmail}</p>
                            <p className="text-white text-[13px] md:text-[18px]">Age: {teacher.age}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default SengilStudents
