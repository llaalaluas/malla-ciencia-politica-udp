const STORAGE_KEY = "malla_udp_cp";
let progress = JSON.parse(
    localStorage.getItem(STORAGE_KEY) || "{}"
);
function getCourseStatus(id){
    return progress[id] || "none";
}
function saveProgress(){
    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(progress)
    );
}
function isUnlocked(course){
    if(!course.prereq.length){
        return true;
    }
    for(const req of course.prereq){
        const state = getCourseStatus(req);
        if(course.requireApproved){
            if(state !== "approved"){
                return false;
            }
        }else{
            if(
                state !== "approved" &&
                state !== "taken"
            ){
                return false;
            }
        }
    }
    return true;
}
function nextState(current){
    if(current === "none"){
        return "taken";
    }
    if(current === "taken"){
        return "approved";
    }
    return "none";
}
function getSemesterContainer(number){
    return document.getElementById(
        `semester-${number}`
    );
}
function renderCourses(){
    for(let i=1;i<=8;i++){
        const semesterDiv =
            getSemesterContainer(i);
        semesterDiv.innerHTML = "";
    }
    COURSES.forEach(course => {
        const container =
            getSemesterContainer(
                course.semester
            );
        const div =
            document.createElement("div");
        div.classList.add("course");
        div.classList.add(course.area);
        const status =
            getCourseStatus(course.id);
        if(status === "taken"){
            div.classList.add("taken");
        }
        if(status === "approved"){
            div.classList.add("approved");
        }
        const unlocked =
            isUnlocked(course);
        if(!unlocked){
            div.classList.add("locked");
        }
        let icon = "⚪";
        if(status === "taken"){
            icon = "🟡";
        }
        if(status === "approved"){
            icon = "🟢";
        }
        div.innerHTML = `
            <strong>${icon}</strong>
            ${course.name}
        `;
        div.addEventListener(
            "click",
            () => {
                if(!unlocked){
                    alert(
                        "Debes cumplir los prerrequisitos."
                    );
                    return;
                }
                progress[course.id] =
                    nextState(status);
                saveProgress();
                renderCourses();
                updateStats();
            }
        );
        container.appendChild(div);
    });
}
function updateStats(){
    const total =
        COURSES.length;
    let approved = 0;
    let taken = 0;
    COURSES.forEach(course => {
        const status =
            getCourseStatus(course.id);
        if(status === "approved"){
            approved++;
        }
        if(status === "taken"){
            taken++;
        }
    });
    const pending =
        total - approved - taken;
    const percentage =
        Math.round(
            (approved / total) * 100
        );
    document.getElementById(
        "approvedCount"
    ).textContent = approved;
    document.getElementById(
        "takenCount"
    ).textContent = taken;
    document.getElementById(
        "pendingCount"
    ).textContent = pending;
    document.getElementById(
        "totalCount"
    ).textContent = total;
    document.getElementById(
        "progressText"
    ).textContent =
        percentage + "%";
    document.getElementById(
        "progressFill"
    ).style.width =
        percentage + "%";
}
function resetProgress(){
    if(
        !confirm(
            "¿Reiniciar toda la malla?"
        )
    ){
        return;
    }
    progress = {};
    saveProgress();
    renderCourses();
    updateStats();
}
function exportData(){
    const blob =
        new Blob(
            [
                JSON.stringify(
                    progress,
                    null,
                    2
                )
            ],
            {
                type:
                "application/json"
            }
        );
    const url =
        URL.createObjectURL(blob);
    const a =
        document.createElement("a");
    a.href = url;
    a.download =
        "malla-ciencia-politica.json";
    a.click();
    URL.revokeObjectURL(url);
}
function importData(file){
    const reader =
        new FileReader();
    reader.onload = e => {
        try{
            progress =
                JSON.parse(
                    e.target.result
                );
            saveProgress();
            renderCourses();
            updateStats();
        }catch{
            alert(
                "Archivo inválido."
            );
        }
    };
    reader.readAsText(file);
}
function setupButtons(){
    document
        .getElementById(
            "resetBtn"
        )
        .addEventListener(
            "click",
            resetProgress
        );
    document
        .getElementById(
            "exportBtn"
        )
        .addEventListener(
            "click",
            exportData
        );
    document
        .getElementById(
            "importBtn"
        )
        .addEventListener(
            "click",
            () => {
                document
                    .getElementById(
                        "importFile"
                    )
                    .click();
            }
        );
    document
        .getElementById(
            "importFile"
        )
        .addEventListener(
            "change",
            e => {
                if(
                    e.target.files.length
                ){
                    importData(
                        e.target.files[0]
                    );
                }
            }
        );
    document
        .getElementById(
            "darkModeBtn"
        )
        .addEventListener(
            "click",
            () => {
                document.body
                    .classList.toggle(
                        "dark"
                    );
            }
        );
}
renderCourses();
updateStats();
setupButtons();
