console.log('testet')

document.getElementById('btn-nav-toggle').addEventListener('click',openNav)
// 函式名稱
function openNav(){
    console.log('點按鈕打開主導覽')
    if( document.getElementById('primary-navigation').classList.contains('active') == true ){
        // 假如主導覽有active類別時執行
        document.getElementById('primary-navigation').classList.remove('active')
        document.getElementById('btn-nav-toggle').textContent = 'menu'
    }else{
        // 假如主導覽沒有active類別時執行
        document.getElementById('primary-navigation').classList.add('active')
        document.getElementById('btn-nav-toggle').textContent = 'X'

    }// openNav if end
    
} //openNav end