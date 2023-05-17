/*
yeah scripts
very ambitious
idk why i am doing this
quick reset test:
for (i = 0; i < 5; i++) {
    newLine()
    document.getElementById(`line_${i + 1}`).value = `test${i + 1}`
}
*/
let settings = {
    lineLabelEnabled: 1,
}
let workspace_content = {

}
function lineLabelRemove() {
    const trash = document.createElement("div");
    document.body.appendChild(trash);
    for (i = 0; i < Object.keys(workspace_content).length; i++) {
        try {
            trash.appendChild(document.getElementById(`LineLabel_${i}`));
        } catch {
            console.log(`Uncaught Custom: attempted to remove nonexistant 'lineLabel_${i}'`);
        }
    }
    trash.remove();
}
function lineLabelAppendInputLine() {
    
}
function generateWorkspace() {
    if (prompt("Are you sure you want to generate a new workspace? You will lose all unsaved progress. Type 'yes' to continue.").toLowerCase() == "yes") {
        if (!document.getElementById("workspace")) {
            const workspace = document.createElement("div");
            document.body.appendChild(workspace);
            workspace.id = "workspace";

            const newLineButton = document.createElement("button");
            workspace.appendChild(newLineButton);
            newLineButton.id = "new-line-button";
            newLineButton.innerHTML = "New Line";
            newLineButton.addEventListener("click", newLine);
            
        } else {

        }
    }
}
function newLine() {
    if (document.getElementById("workspace")) {
        if (document.getElementById("new-line-button")) {document.getElementById("new-line-button").remove();}
        if (document.getElementById("remove-line-button")) {document.getElementById("remove-line-button").remove();}
        const lineLabel = document.createElement("p");
        document.getElementById("workspace").appendChild(lineLabel);
        lineLabel.innerHTML = `Line ${Object.keys(workspace_content).length + 1}:`;
        lineLabel.id = `lineLabel_${Object.keys(workspace_content).length + 1}`;

        const line = document.createElement("input");
        document.getElementById("workspace").appendChild(line);
        workspace_content[`line_${Object.keys(workspace_content).length + 1}`] = "";
        line.id = `line_${Object.keys(workspace_content).length}`; //done after ^ b/c lines should start at 1
        line.value = "";

        const lineBreak = document.createElement("br")
        lineBreak.id = `br_${Object.keys(workspace_content).length}`
        workspace.appendChild(lineBreak);

        const removeLineButton = document.createElement("button");
        document.getElementById("workspace").appendChild(removeLineButton);
        removeLineButton.id = "remove-line-button";
        removeLineButton.innerHTML = "Remove Line";
        removeLineButton.addEventListener("click", removeLine);

        const newLineButton = document.createElement("button");
        document.getElementById("workspace").appendChild(newLineButton);
        newLineButton.id = "new-line-button";
        newLineButton.innerHTML = "New Line";
        newLineButton.addEventListener("click", newLine);
    } else {
        throw "Custom: workspace not found for new line";
    }
}
function removeLine() {
    if (document.getElementById("remove-line-button")) {
        document.getElementById("remove-line-button").remove();
        if (document.getElementById("new-line-button")) {document.getElementById("new-line-button").remove();}
        document.getElementById(`line_${Object.keys(workspace_content).length}`).remove();
        document.getElementById(`lineLabel_${Object.keys(workspace_content).length}`).remove();
        document.getElementById(`br_${Object.keys(workspace_content).length}`).remove();
        delete workspace_content[`line_${Object.keys(workspace_content).length}`]

        const removeLineButton = document.createElement("button");
        document.getElementById("workspace").appendChild(removeLineButton);
        removeLineButton.id = "remove-line-button";
        removeLineButton.innerHTML = "Remove Line";
        removeLineButton.addEventListener("click", removeLine);

        const newLineButton = document.createElement("button");
        document.getElementById("workspace").appendChild(newLineButton);
        newLineButton.id = "new-line-button";
        newLineButton.innerHTML = "New Line";
        newLineButton.addEventListener("click", newLine);
    }
}

function saveCode(exprt) {
    for (i = 0; i < Object.keys(workspace_content).length; i++) {
        console.log(`line_${i + 1}`);
        workspace_content[`line_${i + 1}`] = document.getElementById(`line_${i + 1}`).value;
    }
    if (exprt) {
        alert(`Copy below code and paste into import:
${btoa(Object.values(workspace_content))}`);
    }
}
function importCode(importedCode) {
    const code = atob(prompt("Import code here \(Make sure to remove any ''\):")); 
    let startString, endString, ending;
    let p = 1;
    for (i = 0; i < code.length; i++) {
        if (code[i] != ",") {
            ending = i;
            continue;
        } else {
            console.log(i);
            if (startString != undefined) {
                startString = endString + 1;
            } else {
                startString = 0;
            }
            console.log(startString);
            endString = i;
            console.log(endString);
            let codeLine = "";
            for (let j = 0; j < endString - startString; j++) {
                codeLine += code[startString + j];
            }
            console.log(codeLine);
            workspace_content[`line_${p}`] = codeLine;
            document.getElementById(`line_${p}`).value = codeLine;
            p++;
        }
    }
    console.log(ending);
    if (startString != undefined) {
        startString = endString + 1;
    } else {
        startString = 0;
    }
    console.log(startString);
    endString = i;
    console.log(endString);
    let codeLine = "";
    for (let j = 0; j < endString - startString; j++) {
        codeLine += code[startString + j];
    }
    console.log(codeLine);
    workspace_content[`line_${p}`] = codeLine;
    document.getElementById(`line_${p}`).value = codeLine;
    p++;
}