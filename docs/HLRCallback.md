# SmsFusionApi.HLRCallback

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique ID for response | [optional] 
**msisdn** | **Number** | The MSISDN of the number queried | [optional] 
**status** | **String** | Short status code of the response | [optional] 
**country** | **String** | ISO 3166-2 country code | [optional] 
**operator** | **String** | The operator attached to the MSISDN | [optional] 
**mccmnc** | **Number** | MCC and MNC of MSDISDN | [optional] 
**duration** | **String** | If the response code is temporary or permenant | [optional] 
**message** | **String** | Full status code of the response | [optional] 
**extended** | **String** | Extended explanation of the status code | [optional] 
**cost** | **Number** | Cost of the response | [optional] 


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `valid` (value: `"valid"`)

* `invalid` (value: `"invalid"`)

* `unknown` (value: `"unknown"`)




<a name="DurationEnum"></a>
## Enum: DurationEnum


* `perm` (value: `"perm"`)

* `temp` (value: `"temp"`)




