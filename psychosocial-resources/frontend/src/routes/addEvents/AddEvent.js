import "./AddEvents.css"
import { useForm } from "react-hook-form"
import { useCallback } from "react";


function AddEvents() {
    const { register, handleSubmit, reset} = useForm();
    
    const cachedFn = useCallback((data) => {
    fetch(`https://migramind-7imp.vercel.app/getHelp`,{
            method : 'POST',
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }, 
        })   
        .then(() => {
            reset()
            alert('event created')
        })
        
    }, [])
    return (
        <div className="container">
            <form onSubmit={handleSubmit(cachedFn)}>
                <div className="row g-3 m-2">
                    <div className="col-12">
                        <label for="companyInput" className="form-label">COMPANY</label>
                        <input type="text" className="form-control" id="companyInput" placeholder="Name of Company" name="company" {...register('nameCompany')}></input>
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlTextarea2" className="form-label">TITLE OF EVENT</label>
                        <textarea className="form-control" id="exampleFormControlTextarea2" rows="2" {...register('title')}></textarea>
                    </div>

                    <div className="mb-3">
                        <label for="exampleFormControlTextarea1" className="form-label">DESCRIPTION</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="4"{...register('description')}></textarea>
                    </div>

                    <div className="col-6">
                        <label for="websiteUrlInput" className="form-label">WEBSITE URL</label>
                        <input type="text" className="form-control" id="websiteUrlInput" placeholder="Website url" name="website url"{...register('urlBasic')}></input>
                    </div>

                    <div className="col-6">
                        <label for="datingWebsiteUrlInput" className="form-label">URL OF DATING WEB PAGES</label>
                        <input type="text" className="form-control" id="datingWebsiteUrlInput" placeholder="url of dating and help web pages" name="datingWebsiteUrl"{...register('urlSchedule')}></input>
                    </div>

                    <div className="col-6">
                        <label for="addressInput" className="form-label">ADDRESS</label>
                        <input type="text" className="form-control" id="addressInput" placeholder="Address" name="addressInput"{...register('address')}></input>
                    </div>

                    <div className="col-3">
                        <label for="provincieSelect" className="form-label">PROVINCIE</label>
                        <select className="form-select" id="provincieSelect" aria-label="Default select example"{...register('provincie')}>
                            <option selected>Select a Provincie</option>
                            <option value="Barcelona">Barcelona</option>
                        </select>
                    </div>

                    <div className="col-3">
                        <label for="countrySelect" className="form-label">COUNTRY</label>
                        <select className="form-select" id="countrySelect" aria-label="Default select example"{...register('country')}>
                            <option selected>Select a country</option>
                            <option value="SPAIN">SPAIN</option>
                        </select>
                    </div>

                    <div className="col-6">
                        <label for="passwordInput" className="form-label">CONTACT EMAIL</label>
                        <input type="text" className="form-control" id="contactEmailInput" placeholder="Contact Email" name="email"{...register('email')}></input>
                    </div>

                    <div className="col-4">
                        <label for="passwordInput" className="form-label">TELEPHONE NUMBER</label>
                        <input type="text" className="form-control" id="passwordInput" placeholder="Telephone Number" name="phone"{...register('numberPhone')}></input>
                    </div>

                    <div className="col-2">
                        <label for="typeSelect" className="form-label">TYPE OF COMPANY</label>
                        <select className="form-select" id="typeSelect" aria-label="Default select example"{...register('type')}>
                            <option selected>Type of Company</option>
                            <option value="Public">Public</option>
                            <option value="Private But Free">Private But Free</option>
                            <option value="Private and Paid">Private and Paid</option>
                        </select>
                    </div>

                    <div className="col-6">
                        <label for="attencionScheduleInput" className="form-label">ATTENCION SCHEDULE</label>
                        <input type="text" className="form-control" id="attencionScheduleInput" placeholder="Attencion Schedule" name="attencionSchedule"{...register('attencionSchedule')}></input>
                    </div>
                    <div id="btnSubmit" className="col-12 mt-5">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default AddEvents;