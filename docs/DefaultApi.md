# SmsFusionApi.DefaultApi

All URIs are relative to *http://api.smsfusion.com.au/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getHLR**](DefaultApi.md#getHLR) | **GET** /hlr/ | HLR number lookup
[**getHLRCallback**](DefaultApi.md#getHLRCallback) | **GET** /hlr-callback/ | HLR number lookup with results going to a callback URL


<a name="getHLR"></a>
# **getHLR**
> HLRCallback getHLR(key, num, opts)

HLR number lookup

Perform HLR on number

### Example
```javascript
var SmsFusionApi = require('sms_fusion_api');
var defaultClient = SmsFusionApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new SmsFusionApi.DefaultApi();

var key = "key_example"; // String | API Key as generated from the <a href='https://www.smsfusion.com.au/admin/api/'>admin panel</a>

var num = "num_example"; // String | A single phone number or <a href='https://www.smsfusion.com.au/help/msisdn/'>MSDISDN</a>

var opts = { 
  'cc': "cc_example" // String | 2 character country code <a href='https://en.wikipedia.org/wiki/ISO_3166-2'>ISO 3166-2</a> for formatting local numbers internationally
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getHLR(key, num, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| API Key as generated from the &lt;a href&#x3D;&#39;https://www.smsfusion.com.au/admin/api/&#39;&gt;admin panel&lt;/a&gt; | 
 **num** | **String**| A single phone number or &lt;a href&#x3D;&#39;https://www.smsfusion.com.au/help/msisdn/&#39;&gt;MSDISDN&lt;/a&gt; | 
 **cc** | **String**| 2 character country code &lt;a href&#x3D;&#39;https://en.wikipedia.org/wiki/ISO_3166-2&#39;&gt;ISO 3166-2&lt;/a&gt; for formatting local numbers internationally | [optional] 

### Return type

[**HLRCallback**](HLRCallback.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getHLRCallback"></a>
# **getHLRCallback**
> HLRResult getHLRCallback(key, num, cb, opts)

HLR number lookup with results going to a callback URL

Perform HLR on number with the result being sent to the callback URL provided

### Example
```javascript
var SmsFusionApi = require('sms_fusion_api');
var defaultClient = SmsFusionApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new SmsFusionApi.DefaultApi();

var key = "key_example"; // String | API Key as generated from the <a href='https://www.smsfusion.com.au/admin/api/'>admin panel</a>

var num = ["num_example"]; // [String] | Comma separated list of phone numbers or <a href='https://www.smsfusion.com.au/help/msisdn/'>MSDISDN</a>'s

var cb = "cb_example"; // String | HTTP or HTTPS callback URL for each result. The result will be sent as POST with a json object included in <b>result</b>. Timeout for callbacks is set to 30 seconds

var opts = { 
  'cc': "cc_example" // String | 2 character country code <a href='https://en.wikipedia.org/wiki/ISO_3166-2'>ISO 3166-2</a> for formatting local numbers internationally
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getHLRCallback(key, num, cb, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| API Key as generated from the &lt;a href&#x3D;&#39;https://www.smsfusion.com.au/admin/api/&#39;&gt;admin panel&lt;/a&gt; | 
 **num** | [**[String]**](String.md)| Comma separated list of phone numbers or &lt;a href&#x3D;&#39;https://www.smsfusion.com.au/help/msisdn/&#39;&gt;MSDISDN&lt;/a&gt;&#39;s | 
 **cb** | **String**| HTTP or HTTPS callback URL for each result. The result will be sent as POST with a json object included in &lt;b&gt;result&lt;/b&gt;. Timeout for callbacks is set to 30 seconds | 
 **cc** | **String**| 2 character country code &lt;a href&#x3D;&#39;https://en.wikipedia.org/wiki/ISO_3166-2&#39;&gt;ISO 3166-2&lt;/a&gt; for formatting local numbers internationally | [optional] 

### Return type

[**HLRResult**](HLRResult.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

