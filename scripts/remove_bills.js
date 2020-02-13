function removeBill(id){
    const indexWhereIDNoIs = 5;
    document.getElementById(`bill-${id[indexWhereIDNoIs]}`).remove();
}
