let handleClick = (a,b) => {
    let f=false;
    switch(a){
        case 'icon-1':
        case 'icon-2':
        case 'icon-3':
        case 'icon-4':
        case 'icon-5':
        case 'icon-6':
            f=true;
            break;
        default:
            f=false;
            break;

    }
    switch(b){
        case 'answer-1':
        case 'answer-2':
        case 'answer-3':
        case 'answer-4':
        case 'answer-5':
        case 'answer-6':
            f=true;
            break;
        default:
            f=false;
            break;

    }
    if(f === true)
    {
        let aid = document.getElementById(a);
        if(aid.className === "fa fa-close ms-auto icolor")
        document.getElementById(a).className = "fa fa-plus ms-auto icolor";
        else if(aid.className === "fa fa-plus ms-auto icolor")
        document.getElementById(a).className = "fa fa-close ms-auto icolor";

        let bid = document.getElementById(b);
        if(bid.className === "row d-flex justify-content-center ans-n")
        document.getElementById(b).className = "row d-flex justify-content-center ans-b";
        else if(bid.className === "row d-flex justify-content-center ans-b")
        document.getElementById(b).className = "row d-flex justify-content-center ans-n";
    }
}