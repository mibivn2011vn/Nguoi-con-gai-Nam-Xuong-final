document.querySelectorAll("header ul li").forEach(function(page) {
    page.onclick = () => {
        let pageName = page.id.split("-")[1];
        showPage(pageName);
    }
});

function showPage(pageName) {
    clearPages();
    const current_page = document.getElementById(pageName);
    current_page.style.display = "block";
}

function clearPages() {
    const pages = document.querySelectorAll("#page-wrapper > div");
    
    for(var i = 0; i < pages.length; i++){
        pages[i].style.display = "none";
    }
}

showPage("home");

function quiz() {
    alert("Chào mừng đã đến với quiz về Chuyện Người con gái Nam Xương. Bạn đã sẵn sàng để chinh phục quiz chưa");
    
    // variable for the score
    let score = 0;  
    
    // first question
    const q1 = prompt("Ai là tác giả của tác phẩm Người con gái Nam Xương");  
	if (q1 == "Nguyễn Dữ" || q1 == "nguyễn dữ") { 
		alert("Chính xác!");   	
		score = score + 1;   
	}
	else {
		alert("Sai rồi. Đáp án đúng là Nguyễn Dữ");
        score = score - 1;
	}

	// second question
	const q2 = prompt("Chuyện Người con gái Nam Xương thuộc tác phẩm nào");   
	if (q2 == "Truyền kỳ mạn lục" || q2 == " truyền kỳ mạn lục"){
		alert("Chính xác!");   	
		score = score + 1;   
	}   
	else {  
		alert("Sai rồi. Đáp án đúng là Truyền kỳ mạn lục");
        score = score - 1;
	}   

	// third question
	const q3 = prompt("Tác phẩm Người con gái Nam Xương thuộc truyện thứ mấy trong Truyền kỳ mạn lục");   
	if (q3 == "16") { 
		alert("Chính xác!");   	
		score = score + 1;   
	}   
	else {  
		alert("Sai rồi. Đáp án đúng là 16");
        score = score - 1;
	}   
   const q4 = prompt("Chuyện Người con gái Nam Xương có ngôi kể thứ mấy");
    if (q4 =="3" || q4 =="ba" || q4 =="Ngôi kể thứ ba" || q4 =="Ngôi kể thứ 3") {
    alert("Chính xác!");
    score = score + 1;    
    }  
    else { 
    alert("Sai rồi. Đáp án đúng là ngôi kể thứ 3");
    score = score - 1;    
    }
	const q5 = prompt("Vũ Nương đã tự vẫn ở đâu");
    if (q5 =="sông Hoàng Giang" || q5 =="Sông Hoàng Giang" || q5 =="Sông hoàng giang" || q5 =="sông hoàng giang") {
      alert("Chính xác!");
      score = score + 1;   
    }
    else { 
      alert("Sai rồi. Vũ Nương đã tự vẫn trên sông Hoàng Giang");
      score = score - 1;    
    }
	alert("Bạn có " + score + " điểm sau 5 câu hỏi.");  

} // end bracket for the function          