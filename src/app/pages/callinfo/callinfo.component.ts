import { Component, OnInit } from '@angular/core';
import {CallinfoService} from './callinfo.service';
import {Config} from  '../common/utils/Config'
import {CallInfoItem, CallInfoRequest, PageResponse} from '../common/entity/call-info-item';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-callinfo',
  templateUrl: './callinfo.component.html',
  styleUrls: ['./callinfo.component.less']
})
export class CallinfoComponent implements OnInit {

  public options:{};

  public options2:{};


  public optionsByYear:{};
  public optionsByMonth:{};

  public xlines = [];
  public name:string|null;
  public callSums = [];
  public callDurationsSums = [];

  // 按月查询
  public xlinesMonth = [];
  public nameMonth:string|null;
  public callSumsMonth = [];
  public callDurationsSumsMonth = [];

  public query = new CallInfoRequest();


  public config:Config;

  public callInfos: PageResponse<CallInfoItem>;
  public callInfosMonth: PageResponse<CallInfoItem>;


  date = '2019-10-11';
  dateRange = [];

  onQueryDateChange(result: Date): void {
    this.query.year = result.getFullYear();
    this.query.month = result.getUTCMonth() + 1;
    this.query.day = result.getUTCDay() + 1 ;
    this.query.telephone = this.telephone;
    console.log('time onChange: '+ this.query.year + "-" + this.query.month + "-" + this.query.day + " 电话:" + this.query.telephone);
  }



  // 输入选项
  telephone:string | null = "15711910344";


  constructor(private callinfoService:CallinfoService) { }

  showDataByYear(){
    this.optionsByYear = {
      title: {
        text: '用户: '+ this.name + ' 的' + this.query.year + '年汇总'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data:['通话次数','通话时间']
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: this.xlines
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name:'通话次数',
          type:'line',
          stack: '总量',
          data: this.callSums
        },
        {
          name:'通话时间',
          type:'line',
          stack: '总量',
          data:this.callDurationsSums
        }
      ]
    }
  }

  datashowMonth(){
    this.optionsByMonth={
        title: {
          text: '用户: '+ this.name + ' 的' + this.query.month + '月汇总'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data:['通话次数','通话时间']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: this.xlinesMonth
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name:'通话次数',
            type:'line',
            stack: '总量',
            data: this.callSumsMonth
          },
          {
            name:'通话时间',
            type:'line',
            stack: '总量',
            data:this.callDurationsSumsMonth
          }
        ]
      };
  }

  ngOnInit() {

    // 初始化查询条件
    this.query.telephone=this.telephone;
    this.query.year =2019;
    this.query.month=10;
    this.query.day=11;
    // this.onQueryDateChange(new Date(this.date));

    // this.showTable();
    // this.getCallInfosByMonth();
    this.getCallInfosByYear();
    this.getCallInfosByMonth();
  }

  /**
   * 按月份查询
   */
  getCallInfosByYear(){
    this.callinfoService.getCallInfoByYear(this.query)
        .subscribe(res => {
            this.callInfos = res;
              this.xlines = [];
              this.callSums=[];
              this.callDurationsSums=[];
              this.callInfos.data.forEach(call =>{
                this.xlines.push(call.month.toString() + "月");
                this.callSums.push(call.callSum);
                this.callDurationsSums.push(call.callDurationSum/60);
                this.query.name = call.name;
                this.name = call.name
              });
              // 重新刷新数据
              this.showDataByYear();
            },
                error => console.error(error));
  };

  getCallInfosByMonth(){
    this.xlinesMonth = [];
    this.callSumsMonth=[];
    this.callDurationsSumsMonth=[];

    this.callinfoService.getCallInfoByMonth(this.query)
        .subscribe(res => {
              this.callInfosMonth = res;
              this.callInfosMonth.data.forEach(call =>{
                this.xlinesMonth.push(call.day.toString() + "日");
                this.callSumsMonth.push(call.callSum);
                this.callDurationsSumsMonth.push(call.callDurationSum/60);
                this.query.name = call.name;
                this.query.month = call.month;
                this.nameMonth = call.name;
              });

              // 装载数据
              this.datashowMonth();
            },
            error => console.error(error));
  };

  showTable(){
    this.getCallInfosByYear();


  }

  showTableMonth(){

  }
}
