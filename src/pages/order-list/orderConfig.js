/**
 * @desc 主要是根据不同的订单状态处理按钮的状态
 *   OrderStateDeleted = 0,  //已删除   （左：无，右：无）
  OrderStateWaitPay = 60,  //待付款（左：取消，右：去支付）

  OrderStatePayed = 70,   //已付款       （左：无，右：催发货）
  OrderStateWaitShip = 70,    //待发货  （左：无，右：催发货）
  OrderStateWaitRecv = 80,    //待收货 （左：无，右：确认收货）

  OrderStateDone = 90,  //交易完成       （左：无，右：删除订单）
  OrderStateClose = 90,   //交易完成     （左：无，右：删除订单)
 */
/**
 * @desc 不同订单状态对应的文案
 */
export const ORDERSTATUSTEXT = {
  60: '待支付',
  70: '待发货',
  80: '待收货',
  90: '已完成'
}
/**
 * @desc 不同订单状态显示不同的按钮
 */
export const ORDERSTATUSBUTTON = {
  60: [
    {
      // 按钮类型
      type: 'info',
      // 按钮文案
      text: '去支付',
      // 按钮操作key
      operationKey: 'toPay'
    },
    {
      // 按钮类型
      type: 'danger',
      // 按钮文案
      text: '取消订单',
      // 按钮操作key
      operationKey: 'toCancle'
    }
  ],
  70: [
    {
      // 按钮类型
      type: 'primary',
      // 按钮文案
      text: '提醒发货',
      // 按钮操作key
      operationKey: 'toRemindPacking'
    }
  ],
  80: [
    {
      // 按钮类型
      type: 'warning',
      // 按钮文案
      text: '确认收货',
      // 按钮操作key
      operationKey: 'toSign'
    },
    {
      // 按钮类型
      type: 'primary',
      // 按钮文案
      text: '查看物流',
      // 按钮操作key
      operationKey: 'toCheckExpress'
    }
  ],
  90: [
    {
      // 按钮类型
      type: 'warning',
      // 按钮文案
      text: '删除订单',
      // 按钮操作key
      operationKey: 'toDelete'
    }
  ]
}
