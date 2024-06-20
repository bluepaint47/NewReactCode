
import './info.css'
function Info({ weight, height, id, date, bmi, deleteCard }) {
 
    const handleDeleteCard = () => {
        deleteCard(id);
    }
    const bmiCheck = (bmi) =>{
        if(bmi < 16){
           return (
            <p className="label-underweight">you are underweight</p>
           );
        }
        else if(bmi <= 25 ){
            return (
            <p className="label-healthy">you are healthy</p>
            );
        }
        else {
            return(
            <p className="label-overweight">you are overweight</p>
            )
        }
    }

    const bmiText  = bmiCheck(bmi);

    return (
        <div className="col m6 s12">
            <div className="card">
                <div className="card-content">
                    <span className="card-title">
                        BMI:{bmi}
                    </span>
                    <div className="card-data">
                        <span>Weight: {weight} kg</span>
                        <span>Height: {height} cm</span>
                        <span>Date: {date}</span>
                    </div>
                    <div className="card-msg">
                        {bmiText}

                        </div>
                    

                    <button className="delete-btn" onClick={handleDeleteCard}>
                        X
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Info;