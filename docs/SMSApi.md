# SmsFusionApi.SMSApi

All URIs are relative to *https://api.smsfusion.com.au/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**sendSMS**](SMSApi.md#sendSMS) | **GET** /sms/ | Send an SMS


<a name="sendSMS"></a>
# **sendSMS**
> SMSResult sendSMS(key, num, msg, opts)

Send an SMS

Send one or more SMS

### Example
```javascript
var SmsFusionApi = require('sms_fusion_api');
var defaultClient = SmsFusionApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new SmsFusionApi.SMSApi();

var key = "key_example"; // String | API Key as generated from the <a href='https://www.smsfusion.com.au/admin/api/'>admin panel</a>

var num = ["num_example"]; // [String] | Comma separated list of phone numbers or <a href='https://www.smsfusion.com.au/help/msisdn/'>MSDISDN</a>'s

var msg = "msg_example"; // String | Message content to send

var opts = { 
  'from': "from_example", // String | MSISDN or vanity alphanumeric source number
  'deliverby': "deliverby_example", // String | UTC encoded time to send the SMS
  'dlrcb': "dlrcb_example", // String | HTTP or HTTPS callback URL for delivery reports. Timeout for callbacks is set to 30 seconds
  'replycb': "replycb_example", // String | HTTP or HTTPS callback URL for replies. Timeout for callbacks is set to 30 seconds
  'replyemail': "replyemail_example", // String | Email address to send replies to
  'validity': 56, // Number | Time in minutes to keep the SMS valid for
  'cc': "cc_example" // String | 2 character country code <a href='https://en.wikipedia.org/wiki/ISO_3166-2'>ISO 3166-2</a> for formatting local numbers internationally
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.sendSMS(key, num, msg, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| API Key as generated from the &lt;a href&#x3D;&#39;https://www.smsfusion.com.au/admin/api/&#39;&gt;admin panel&lt;/a&gt; | 
 **num** | [**[String]**](String.md)| Comma separated list of phone numbers or &lt;a href&#x3D;&#39;https://www.smsfusion.com.au/help/msisdn/&#39;&gt;MSDISDN&lt;/a&gt;&#39;s | 
 **msg** | **String**| Message content to send | 
 **from** | **String**| MSISDN or vanity alphanumeric source number | [optional] 
 **deliverby** | **String**| UTC encoded time to send the SMS | [optional] 
 **dlrcb** | **String**| HTTP or HTTPS callback URL for delivery reports. Timeout for callbacks is set to 30 seconds | [optional] 
 **replycb** | **String**| HTTP or HTTPS callback URL for replies. Timeout for callbacks is set to 30 seconds | [optional] 
 **replyemail** | **String**| Email address to send replies to | [optional] 
 **validity** | **Number**| Time in minutes to keep the SMS valid for | [optional] 
 **cc** | **String**| 2 character country code &lt;a href&#x3D;&#39;https://en.wikipedia.org/wiki/ISO_3166-2&#39;&gt;ISO 3166-2&lt;/a&gt; for formatting local numbers internationally | [optional] 

### Return type

[**SMSResult**](SMSResult.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

