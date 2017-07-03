const plandata = [{
    date: '2017-07-02',
    name: '唐一',
    address: '上海市长宁区天山路 1518 弄',
}, {
    date: '2017-07-01',
    name: '唐二',
    address: '上海市浦东新区太原路 1518 弄'
}, {
    date: '2016-06-20',
    name: '唐三',
    address: '上海市嘉定区四平路 1518 弄',
}, {
    date: '2017-06-15',
    name: '唐四',
    address: '上海市青浦区怀宁路 1518 弄'
}];

const getplandata = plandate => plandata.filter(v => {
    var cur_date = new Date(v.date);
    return cur_date < plandate.end && cur_date > plandate.start
});
const API = {
    getplandata
}
module.exports = API;
