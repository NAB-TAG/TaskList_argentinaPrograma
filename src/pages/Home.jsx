import { Table } from "./taskList";

const Home = () => {
    return(
        <>
        <div>
            <div className="w-full h-auto flex justify-center">
                <div className="w-full p-2">
                    <Table />
                </div>
            </div>
        </div>
        
        </>
    );
}

export default Home;