<template>
  <div class="box-white">
    <my-header title="外部质量问题及VOC"/>
    <my-scroll-board :config="config" style="height:calc(100% - 70px)"/>
  </div>

</template>

<script>
export default {
  name: 'FA1',
  data() {
    return {

      dates: [],
      config: {
        header: ['时间', '客户', '项目', '叶型', '叶片号', '问题描述/客户要求', '责任部门', '完成时间', '状态'],
        headerBGC: '#bdf8fd',
        oddRowBGC: '#fff',
        evenRowBGC: '#bdf8fd',
        data: [
          [
            '2023-08-01 10:00',
            '客户A',
            '项目1',
            '叶型1',
            '叶片001',
            '<span style="word-break: break-all;white-space: break-spaces">问题描述或客户要求1111</span>',
            '责任部门1',
            '2023-08-01 10:00',
            '已完成'
          ],
          [
            '2023-07-27 14:30',
            '客户B',
            '项目2',
            '叶型2',
            '叶片002',
            '问题描述或客户要求2',
            '责任部门2',
            '2023-08-02 14:30',
            '已完成'
          ],
          [
            '2023-07-28 09:45',
            '客户C',
            '项目3',
            '叶型3',
            '叶片003',
            '问题描述或客户要求3',
            '责任部门3',
            '2023-08-03 09:45',
            '已完成'
          ],
          [
            '2023-07-29 16:00',
            '客户D',
            '项目4',
            '叶型4',
            '叶片004',
            '问题描述或客户要求4',
            '责任部门4',
            '2023-08-04 16:00',
            '已完成'
          ],
          [
            '2023-07-30 11:15',
            '客户E',
            '项目5',
            '叶型5',
            '叶片005',
            '问题描述或客户要求5',
            '责任部门5',
            '2023-08-05 11:15',
            '未完成'
          ],
          [
            '2023-07-31 08:30',
            '客户F',
            '项目6',
            '叶型6',
            '叶片006',
            '问题描述或客户要求6',
            '责任部门6',
            '2023-08-06 08:30',
            '未完成'

          ],
          [
            '2023-08-01 15:20',
            '客户G',
            '项目7',
            '叶型7',
            '叶片007',
            '<span style="word-break: break-all">问题描述或客户要求7</span>',
            '责任部门7',
            '2023-08-07 15:20',
            '进行中'
          ],
          [
            '2023-08-02 12:45',
            '客户H',
            '项目8',
            '叶型8',
            '叶片008',
            '问题描述或客户要求8',
            '责任部门8',
            '2023-08-08 12:45',
            '进行中'
          ],
          [
            '2023-08-03 09:55',
            '客户I',
            '项目9',
            '叶型9',
            '叶片009',
            '问题描述或客户要求9',
            '责任部门9',
            '2023-08-09 09:55',
            '进行中'
          ],
          [
            '2023-08-04 14:10',
            '客户J',
            '项目10',
            '叶型10',
            '叶片010',
            '问题描述或客户要求10',
            '责任部门10',
            '2023-08-10 14:10',
            '进行中'
          ],
          [
            '2023-08-05 16:25',
            '客户K',
            '项目11',
            '叶型11',
            '叶片011',
            '问题描述或客户要求11',
            '责任部门11',
            '2023-08-11 16:25',
            '进行中'
          ],
          [
            '2023-08-06 08:40',
            '客户L',
            '项目12',
            '叶型12',
            '叶片012',
            '问题描述或客户要求12',
            '责任部门12',
            '2023-08-12 08:40',
            '进行中'
          ],
          [
            '2023-08-07 10:50',
            '客户M',
            '项目13',
            '叶型13',
            '叶片013',
            '问题描述或客户要求13',
            '责任部门13',
            '2023-08-13 10:50',
            '进行中'
          ],
          [
            '2023-08-08 13:15',
            '客户N',
            '项目14',
            '叶型14',
            '叶片014',
            '问题描述或客户要求14',
            '责任部门14',
            '2023-08-14 13:15',
            '进行中'
          ],
          [
            '2023-08-09 15:30',
            '客户O',
            '项目15',
            '叶型15',
            '叶片015',
            '问题描述或客户要求15',
            '责任部门15',
            '2023-08-15 15:30',
            '进行中'
          ],
          [
            '2023-08-10 09:00',
            '客户P',
            '项目16',
            '叶型16',
            '叶片016',
            '问题描述或客户要求16',
            '责任部门16',
            '2023-08-16 09:00',
            '进行中'
          ],
          [
            '2023-08-11 11:20',
            '客户Q',
            '项目17',
            '叶型17',
            '叶片017',
            '问题描述或客户要求17',
            '责任部门17',
            '2023-08-17 11:20',
            '进行中'
          ]

        ],
        align: ['left', 'center', 'left', 'left', 'left'],
        rowNum: 8,
        hoverPause: true,
        headerHeight: 30
      }
    }
  },
  created() {
    // const startDate = new Date('2024-07-26')
    // const endDate = new Date('2024-08-25')
    //
    // const dateArray = []
    // for (let currentDate = startDate; currentDate <= endDate; currentDate.setDate(currentDate.getDate() + 1)) {
    //   const month = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'][currentDate.getMonth()]
    //   const day = currentDate.getDate()
    //
    //   if (day !== 18 && day !== 4) {
    //     dateArray.push({
    //       date: `${month}月${day}日`
    //     })
    //   } else {
    //     dateArray.push({
    //       date: `${month}月${day}日`,
    //       type: 'danger'
    //     })
    //   }
    // }
    // this.dates = dateArray
  }
}
</script>

<style lang="less" scoped>

</style>
