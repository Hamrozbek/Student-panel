import { useNavigate } from "react-router-dom"

const TeacherCard = ({item}) => {
    const navigate = useNavigate()

    return (
        <div onClick={() => navigate(`${item.id}`)} className="w-[400px] cursor-pointer rounded-md p-4 bg-[#333333]">
            <img className="mb-2 rounded-md" src={item.image} alt="teacher img" width={400} height={300} />
            <h2 className="text-white font-bold text-[20px]">{item.name} - {item.surname}</h2>
            <p className="text-white">Email: {item.gmail}</p>
            <p className="text-white font-semibold">Age: {item.age}</p>
        </div>
    )
}

export default TeacherCard
