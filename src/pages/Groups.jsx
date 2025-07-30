import { StudentList } from "./Students"
import { teacherlist } from "./Teachers"

const Groups = () => {
    return (
        <div className="p-6 space-y-10">
            {teacherlist.map((teacher => {
                const teacherStudents = StudentList.filter(student => student.teacherId === teacher.id)

                return (
                    <div key={teacher.id} className="bg-[#2f2f2f] p-4 rounded-md">
                        <div className="mb-4 border-b border-gray-600 pb-2">
                            <div className="flex items-center gap-[10px]">
                                <img className="w-[80px] rounded-full" src={teacher.image} alt="img" />
                                <div>
                                    <p className="text-white font-bold text-[20px]">{teacher.name} {teacher.surname} ({teacher.stack})</p>
                                    <p className="text-white">Email: {teacher.gmail} | Age: {teacher.age}</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            {teacherStudents.length > 0 ? (
                                teacherStudents.map(student => (
                                    <div key={student.id} className="flex items-center gap-[20px] w-[400px] border-[1px] border-white p-2 rounded-[10px]">
                                        <img className="w-[100px] rounded-full" src={student.img} alt="img" width={100} height={100} />
                                        <div>
                                            <h2 className="text-white font-bold">{student.name} - {student.surname}</h2>
                                            <p className="text-white">Age: {student.age}</p>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p className=" text-white">No Students</p>
                            )}
                        </div>
                    </div>
                )
            }))}
        </div>
    )
}

export default Groups
