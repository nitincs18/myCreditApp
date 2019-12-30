export function htmlToReactParser(htmlString) {
    let HtmlToReactParser = require('html-to-react').Parser;
    return new HtmlToReactParser().parse(htmlString);
    
}

export function getEmployeeName(empArr, empIdArr) {
    //empArr = [{empId: "ET0001", employeeName: "Gyanesh Kumar"}, {empId: "ET0050", employeeName: "Divya Agrawal"}]
    
    let tempArr = [];
    empArr.map((item, index) => {
        //empIdArr !== null && empIdArr !== "" && empIdArr !== undefined ? empIdArr.indexOf(item.empId) !== -1 : "" ? tempArr.push(item.employeeFirstName + " " + item.employeeLastName + ", ") : ""
        empIdArr !== null && empIdArr !== "" && empIdArr !== undefined ? empIdArr.indexOf(item.empId) !== -1 ? tempArr.push(item.employeeFirstName + " " + item.employeeLastName + ", ") : "" : ""
    })
    return tempArr
}

export function parseEmployeeNameWithId(empArr, empIdArr) {
    //empArr = [{empId: "ET0001", employeeName: "Gyanesh Kumar"}, {empId: "ET0050", employeeName: "Divya Agrawal"}]
    let tempArr = [];
    empArr.map((item) => {
        empIdArr.indexOf(item.empId) !== -1 ? tempArr.push({ "label": item.employeeName + "(" + item.empId + ")", "value": item.empId }) : ""
    })
    return tempArr
}

// export function getDesignationName(degArr, empIdArr){
//     //empArr = [{empId: "ET0001", employeeName: "Gyanesh Kumar"}, {empId: "ET0050", employeeName: "Divya Agrawal"}]
//     let tempArr = [];
//     degArr.map((item)=>{
//        empIdArr.indexOf(item.designationId) !== -1 ? tempArr.push(item.designation ) : ""
//     })
//     return tempArr
// }

//one array with one single string
export function getEmployeeNamebyIDString(empArr, empId) {
    let tempArr = [];
    empArr.map((item) => {
        empId.indexOf(item.empId) !== -1 ? tempArr.push(item.employeeName) : ""
    })
    return tempArr
}

export function getEmployeeNamebyIDStringNewFnameLName(empArr, empId) {
    let tempArr = [];
    empArr.map((item) => {
        empId.indexOf(item.empId) !== -1 ? tempArr.push(item.employeeFirstName + " " + item.employeeLastName) : ""
    })
    return tempArr
}

export function getEmployeeNamebyID(empArr, empId) {
    let tempArr = [];
    empArr.map((item) => {
        item.empId === empId ? tempArr.push(item.employeeFirstName + " " + item.employeeLastName) : ""
    })
    return tempArr
}

export function getDesignationName(empArr, empId) {
    let tempArr = "";
    empArr.map((item) => {
        if (item.designationId === empId) {
            tempArr = item.designation + " (" + item.band + ")"
        }
    })
    return tempArr
}

