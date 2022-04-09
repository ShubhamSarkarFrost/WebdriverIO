module.exports = class currentdatetime {


    currentdatetime(){
        var today = this.today
        var date = this.date
        var time = this.time
    }
     today = new Date();
     date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
     time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();



}
