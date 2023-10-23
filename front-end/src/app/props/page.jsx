import PropCard from "./components/propCard"
import NavFilter from "./components/navFilter"

const data = {}

export default function PropsPage(){
    return(
        <div>
            <NavFilter />
            <PropCard data={data} />
            <PropCard data={data} />
            <PropCard data={data} />
            <PropCard data={data} />
            <PropCard data={data} />
        </div>

    )
}