*  [捐赠服务](https://i.itfuwu.dynv6.net/)
*  联系我
  * <a href="https://ok.shareoto.trade" onclick="showFriendlyAlert(event)">人工服务</a>
<!-- 引入 SweetAlert2 库 -->
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
<script>
function showFriendlyAlert(event) {
    event.preventDefault(); // 阻止默认链接跳转
    Swal.fire({
        title: '温馨提示',
        html: '请登录后发送您的问题，耐心等待客服，5分钟内会有回复。<br>或者 记住聊天的账号和密码，12小时内查看回复。',
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
</script>

<style>
/* 自定义 SweetAlert2 弹窗样式 */
.custom-swal-popup {
    border-radius: 15px;
    padding: 20px;
    background: #f9f9f9;
}
.custom-swal-title {
    font-size: 24px;
    color: #333;
    font-weight: bold;
}
.custom-swal-content {
    font-size: 16px;
    color: #555;
    line-height: 1.6;
}
.custom-swal-button {
    background-color: #4CAF50;
    color: white;
    border-radius: 8px;
    padding: 10px 20px;
    font-size: 16px;
}
.custom-swal-button:hover {
    background-color: #45a049;
}
</style>
 
*  [俄罗斯搜索](https://yandex.eu/)
