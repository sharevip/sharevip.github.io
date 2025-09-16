function showFriendlyAlert(event) {
    event.preventDefault(); // 阻止默认链接跳转
    Swal.fire({
        title: '温馨提示',
        html: '请登录后发送您的问题，<br/>耐心等待客服，5分钟内会有回复。<br/>或者 记住聊天的账号和密码，12小时内查看回复。',
        icon: 'info',
        confirmButtonText: '好的',
        customClass: {
            popup: 'custom-swal-popup',
            title: 'custom-swal-title',
            content: 'custom-swal-content',
            confirmButton: 'custom-swal-button'
        }
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = 'https://ok.shareoto.trade'; // 点击“好的”后跳转
        }
    });
}
function showVideo() {
    event.preventDefault(); 
    var video = document.getElementById("myVideo");
    video.style.display = "block";
}
