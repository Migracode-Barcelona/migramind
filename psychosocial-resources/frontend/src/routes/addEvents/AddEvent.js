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
        <div class="container ">
            <form onSubmit={handleSubmit(cachedFn)}>
                <div class="row g-3 m-2">
                    <div class="col-12">
                        <label for="companyInput" class="form-label">COMPANY</label>
                        <input type="text" class="form-control" id="companyInput" placeholder="Name of Company" name="company" {...register('nameCompany')}></input>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea2" class="form-label">TITLE OF EVENT</label>
                        <textarea class="form-control" id="exampleFormControlTextarea2" rows="2" {...register('title')}></textarea>
                    </div>

                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">DESCRIPTION</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="4"{...register('description')}></textarea>
                    </div>

                    <div class="col-6">
                        <label for="websiteUrlInput" class="form-label">WEBSITE URL</label>
                        <input type="text" class="form-control" id="websiteUrlInput" placeholder="Website url" name="website url"{...register('urlBasic')}></input>
                    </div>

                    <div class="col-6">
                        <label for="datingWebsiteUrlInput" class="form-label">URL OF DATING WEB PAGES</label>
                        <input type="text" class="form-control" id="datingWebsiteUrlInput" placeholder="url of dating and help web pages" name="datingWebsiteUrl"{...register('urlSchedule')}></input>
                    </div>

                    <div class="col-6">
                        <label for="addressInput" class="form-label">ADDRESS</label>
                        <input type="text" class="form-control" id="addressInput" placeholder="Address" name="addressInput"{...register('address')}></input>
                    </div>

                    <div class="col-3">
                        <label for="provincieSelect" class="form-label">PROVINCIE</label>
                        <select class="form-select" id="provincieSelect" aria-label="Default select example"{...register('provincie')}>
                            <option selected>Select a Provincie</option>
                            <option value="Barcelona">Barcelona</option>
                        </select>
                    </div>

                    <div class="col-3">
                        <label for="countrySelect" class="form-label">COUNTRY</label>
                        <select class="form-select" id="countrySelect" aria-label="Default select example"{...register('country')}>
                            <option selected>Select a country</option>
                            <option value="SPAIN">SPAIN</option>
                        </select>
                    </div>

                    <div class="col-6">
                        <label for="passwordInput" class="form-label">CONTACT EMAIL</label>
                        <input type="text" class="form-control" id="contactEmailInput" placeholder="Contact Email" name="email"{...register('email')}></input>
                    </div>

                    <div class="col-4">
                        <label for="passwordInput" class="form-label">TELEPHONE NUMBER</label>
                        <input type="text" class="form-control" id="passwordInput" placeholder="Telephone Number" name="phone"{...register('numberPhone')}></input>
                    </div>

                    <div class="col-2">
                        <label for="typeSelect" class="form-label">TYPE OF COMPANY</label>
                        <select class="form-select" id="typeSelect" aria-label="Default select example"{...register('type')}>
                            <option selected>Type of Company</option>
                            <option value="Public">Public</option>
                            <option value="Private But Free">Private But Free</option>
                            <option value="Private and Paid">Private and Paid</option>
                        </select>
                    </div>

                    <div class="col-6">
                        <label for="attencionScheduleInput" class="form-label">ATTENCION SCHEDULE</label>
                        <input type="text" class="form-control" id="attencionScheduleInput" placeholder="Attencion Schedule" name="attencionSchedule"{...register('attencionSchedule')}></input>
                    </div>
                    <div id="btnSubmit" className="col-12 mt-5">
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default AddEvents;