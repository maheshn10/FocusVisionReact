const API_URL = 'https://pha-apps-qa-eu.novartis.net/OriginPreProd/api/';
const ANALYSIS_PATH = '/';
const preprodConfig = {
  GET_MYSTUDY: `${API_URL}MyTrails/GetStudyView`,
  GET_MYCOUNTRY: `${API_URL}MyTrails/GetCountryView`,
  GET_MYSITE: `${API_URL}MyTrails/GetSiteView`,
  GETCONTENT: `${API_URL}ContentMgmt/get`,
  GETALERTCOUNT: `${API_URL}Alert/GetOpenAlertCount`,
  GETALLREPORTS: `${API_URL}Reports/GetAllReports`,
  SETFAVOURITE: `${API_URL}Reports/MarkAsFavorite`,
  GETREPORTDASHBOARD: `${API_URL}Reports/GetReportDashboard`,
  GETIMPACTREPORTDASHBOARD: `${API_URL}Reports/GetImpactReportDashboard`,
  GETIMPACTREPORTS: `${API_URL}Reports/GetImpactReports`,
  GETALERTSDASHBOARD: `${API_URL}Alert/GetAlertDashboard`,
  GETALERTFILTERS: `${API_URL}Alert/GetAlertFilters`,
  GETMYALERTS: `${API_URL}Alert/GetMyAlerts`,
  CLOSEALERT: `${API_URL}Alert/CloseAlert`,
  CLOSEALERTS: `${API_URL}Alert/CloseMultipleAlerts`,
  ALERTCOMMENT: `${API_URL}Alert/AddComment`,
  GETGLOBALFILTERS: `${API_URL}GlobalFilter/GetMyGlobalFilters`,
  GETALLGLOBALFILTERS: `${API_URL}GlobalFilter/GetAllGlobalFilters`,
  CHECKLOGIN: `${API_URL}Users/IsFirstTimeLogin`,
  CREATEUSER: `${API_URL}Users/Create`,
  GET_ALL_SYSTEMS: `${API_URL}SystemsDirectory/GetAllSystems`,
  SHOW_SYSTEM: `${API_URL}SystemsDirectory/get`,
  UPDATE_SYSTEM: `${API_URL}SystemsDirectory/UpdateSystemDirectory`,
  DELETE_SYSTEM: `${API_URL}SystemsDirectory/DeleteSystem/`,
  EVENT_LOGS: `${API_URL}EventLogs/Create`,
  CREATE_SYSTEM: `${API_URL}SystemsDirectory/createSystem/`,
  USER_ROLE_ADMIN: `${API_URL}Users/IsUserAdmin`,
  CATEGORY_LIST: `${API_URL}FunctionalCategory/GetAllFunctionalCategory`,
  USR_ROLE_LIST: `${API_URL}Role/GetAllRoles`,
  IsFirstTimeLogin: `${API_URL}Users/IsFirstTimeLogin`,
  SaveGlobalFilter: `${API_URL}GlobalFilter/SaveGlobalFilter`,
  serverUrl: 'https://spotfpreprd.dev.pharma.novartis.intra/spotfire/wp',
  analysisPath: `${ANALYSIS_PATH}Reporting Hub/GlobalFilter/GLOBAL_FILTER`,
  GetAllGlobalFilters: `${API_URL}GlobalFilter/GetAllGlobalFilters`,
  GetGlobalFilters: `${API_URL}GlobalFilter/GetMyGlobalFilters`,
  GetCockpitWidgets: `${API_URL}CockpitFilters/GetCockpitWidgets`,
  UpdateWidgetPosition: `${API_URL}cockpitfilters/UpdateWidgetPosition`,
  IsRoleExists: `${API_URL}Users/IsRoleExists`,
  AlertURL: `${API_URL}Alert/GetAllAlerts`,
  subscribeAlert: `${API_URL}Alert/SubscribeAlerts`,
  GetAllFunctionalCategory: `${API_URL}FunctionalCategory/GetAllFunctionalCategory`,
  GetAllRoles: `${API_URL}Role/GetAllRoles`,
  FunctionalMap: `${API_URL}FunctionalMap/GetAllFunctionalMaps`,
  CreateLog: `${API_URL}EventLogs/Create`,
  LOGURL: 'https://share.novartis.net/sites/Origin-PreProd/_api/SP.UserProfiles.PeopleManager/GetMyProperties?$select=DisplayName,AccountName',
  BOREPORTURL: 'https://boq.eu.novartis.net:8443/BOE/OpenDocument/opendoc/',
  SFURL: 'https://spotfpreprd.dev.pharma.novartis.intra/spotfire/wp',
  ANALYSISPATHPREFIX: ANALYSIS_PATH,
  IMAGEURL: 'https://pha-apps-qa-eu.novartis.net/cdn/OriginPreProd/images/',
  NETWORK_ERROR_MSG: 'Error occured in the application.'
};

module.exports = preprodConfig;