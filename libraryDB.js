/**
 * Thiết kế database cho 1 hệ thống quản lý thư viện sách, cho biết thư viện này có hàng trăm giá sách khác nhau, sách được để ở bất kì giá nào không theo danh mục nào.
 * Mỗi cuốn sách có 1 mã khác nhau.
 * Hệ thống cho phép đăng ký người dùng mới, một người có thể mượn nhiều sách khác nhau trong một khoảng thời gian hữu hạn.
 * Hệ thống có thể lưu lịch sử ai đã mượn sách nào, bắt đầu mượn từ bao lâu, trả lúc nào.
 * Hệ thống có lưu lại số ngày quá hạn tổng cộng của 1 người dùng, ví dụ sách A quá 2 ngày, sách B quá 3 ngày -> tổng 5 ngày
 */

var user = [
    {   
        id: 0,
        name: 'Huy',
        password: 'qwer123',
        total_overdue_days: 0
    },
    {   
        id: 1,
        name: 'Hieu',
        password: 'qwer123',
        total_overdue_days: 2
    },
    {   
        id: 2,
        name: 'Khuong',
        password: 'qwer123',
        total_overdue_days: 1
    }
];

var books = [
    {
        name_book: 'PHP',
        code_book: 0,
        user_now: {
            name: 'Huy',
            id: 0,
            date_borrow: '2019-09-30',
        },
        user_past: [
            {
                name: 'Khuong',
                id: 2,
                date_borrow: '2019-06-13',
                date_return: '2019-06-22'
            },
            {
                name: 'Hieu',
                id: 1,
                date_borrow: '2019-07-11',
                date_return: '2019-07-21'
            }
        ]
    },
    {
        name_book: 'HTML',
        code_book: 1,
        user_now: {
            name: 'Khuong',
            id: 2,
            date_borrow: '2019-08-30',
        },
        user_past: [
            {
                name: 'Huy',
                id: 0,
                date_borrow: '2019-01-13',
                date_return: '2019-02-22'
            }
        ]
    }
];