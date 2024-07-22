"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var oas_1 = __importDefault(require("oas"));
var core_1 = __importDefault(require("api/dist/core"));
var openapi_json_1 = __importDefault(require("./openapi.json"));
var SDK = /** @class */ (function () {
    function SDK() {
        this.spec = oas_1.default.init(openapi_json_1.default);
        this.core = new core_1.default(this.spec, 'tatumdocs/1.1.2 (api/6.1.2)');
    }
    /**
     * Optionally configure various options that the SDK allows.
     *
     * @param config Object of supported SDK options and toggles.
     * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
     * should be represented in milliseconds.
     */
    SDK.prototype.config = function (config) {
        this.core.setConfig(config);
    };
    /**
     * If the API you're using requires authentication you can supply the required credentials
     * through this method and the library will magically determine how they should be used
     * within your API request.
     *
     * With the exception of OpenID and MutualTLS, it supports all forms of authentication
     * supported by the OpenAPI specification.
     *
     * @example <caption>HTTP Basic auth</caption>
     * sdk.auth('username', 'password');
     *
     * @example <caption>Bearer tokens (HTTP or OAuth 2)</caption>
     * sdk.auth('myBearerToken');
     *
     * @example <caption>API Keys</caption>
     * sdk.auth('myApiKey');
     *
     * @see {@link https://spec.openapis.org/oas/v3.0.3#fixed-fields-22}
     * @see {@link https://spec.openapis.org/oas/v3.1.0#fixed-fields-22}
     * @param values Your auth credentials for the API; can specify up to two strings or numbers.
     */
    SDK.prototype.auth = function () {
        var _a;
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        (_a = this.core).setAuth.apply(_a, values);
        return this;
    };
    /**
     * If the API you're using offers alternate server URLs, and server variables, you can tell
     * the SDK which one to use with this method. To use it you can supply either one of the
     * server URLs that are contained within the OpenAPI definition (along with any server
     * variables), or you can pass it a fully qualified URL to use (that may or may not exist
     * within the OpenAPI definition).
     *
     * @example <caption>Server URL with server variables</caption>
     * sdk.server('https://{region}.api.example.com/{basePath}', {
     *   name: 'eu',
     *   basePath: 'v14',
     * });
     *
     * @example <caption>Fully qualified server URL</caption>
     * sdk.server('https://eu.api.example.com/v14');
     *
     * @param url Server URL
     * @param variables An object of variables to replace into the server URL.
     */
    SDK.prototype.server = function (url, variables) {
        if (variables === void 0) { variables = {}; }
        this.core.setServer(url, variables);
    };
    /**
     * <p><b>2 credits per API call</b></p>
     * <p>Create a new virtual account for a customer.</p>
     * <ul>
     * <li>If the customer that you specified in the request body already exists, the newly
     * created virtual account is added to this customer's list of accounts.</li>
     * <li>If the customer that you specified in the request body does not exist yet, a new
     * customer is created together with the virtual account, and the virtual account is added
     * to this customer.</li>
     * </ul>
     * <p>You can create a virtual account for any supported cryptocurrency, fiat currency,
     * Tatum virtual currency, or fungible tokens created within Tatum. Once the currency/asset
     * is set for a virtual account, it cannot be changed.</p>
     * <p><b>Virtual account balance</b></p>
     * <p>A virtual account has its own balance. The balance can be logically presented by the
     * account balance and available balance:</p>
     * <ul>
     * <li>The <b>account balance</b> (<code>accountBalance</code>) represents all assets on
     * the account, both available and blocked.</li>
     * <li>The <b>available balance</b> (<code>availableBalance</code>) represents the account
     * balance minus the blocked assets. Use the available balance to determine how much a
     * customer can send or withdraw from their virtual account.</li>
     * </ul>
     * <p><b>Cryptocurrency virtual accounts</b></p>
     * <p>When you create a virtual account based on a cryptocurrency (for example, BTC or
     * ETH), you have to provide the extended public key (<code>xpub</code>) of the blockchain
     * wallet that will be connected to this account.</p>
     * <p><b>NOTE:</b> Adding <code>xpub</code> to the virtual account does <b>not</b> connect
     * any specific blockchain address to this account. <code>xpub</code> is a generator of
     * addresses, not an address itself.</p>
     * <p>Not all blockchains provide <code>xpub</code> for wallets, or Tatum may not support
     * wallets on some blockchains. In such cases, use the wallet address or the account
     * address instead.</p>
     * <ul>
     * <li><b>ALGO:</b> No <code>xpub</code> provided; use <code>address</code> from the <a
     * href="https://apidoc.tatum.io/tag/Algorand#operation/AlgorandGenerateWallet"
     * target="_blank">generated wallet</a> instead.</li>
     * <li><b>BCH:</b> Obtain <code>xpub</code> from the <a
     * href="https://apidoc.tatum.io/tag/Bitcoin-Cash#operation/BchGenerateWallet"
     * target="_blank">generated wallet</a>.</li>
     * <li><b>BNB:</b> No <code>xpub</code> provided; use <code>address</code> from the <a
     * href="https://apidoc.tatum.io/tag/BNB-Beacon-Chain#operation/BnbGenerateWallet"
     * target="_blank">generated wallet</a> instead.</li>
     * <li><b>BSC:</b> Obtain <code>xpub</code> from the <a
     * href="https://apidoc.tatum.io/tag/BNB-Smart-Chain#operation/BscGenerateWallet"
     * target="_blank">generated wallet</a> instead.</li>
     * <li><b>BTC:</b> Obtain <code>xpub</code> from the <a
     * href="https://apidoc.tatum.io/tag/Bitcoin#operation/BtcGenerateWallet"
     * target="_blank">generated wallet</a> instead.</li>
     * <li><b>CELO:</b> Obtain <code>xpub</code> from the <a
     * href="https://apidoc.tatum.io/tag/Celo#operation/CeloGenerateWallet"
     * target="_blank">generated wallet</a>.</li>
     * <li><b>DOGE:</b> Obtain <code>xpub</code> from the <a
     * href="https://apidoc.tatum.io/tag/Dogecoin#operation/DogeGenerateWallet"
     * target="_blank">generated wallet</a>.</li>
     * <li><b>EGLD:</b> No <code>xpub</code> provided; use <code>address</code> from the <a
     * href="https://apidoc.tatum.io/tag/Elrond#operation/EgldGenerateAddress"
     * target="_blank">generated blockchain address</a> instead.<br />Blockchain addresses on
     * Elrond are generated based on the mnemonic of an Elrond wallet. If you do not have an
     * Elrond wallet, <a
     * href="https://apidoc.tatum.io/tag/Elrond/#operation/EgldGenerateWallet"
     * target="_blank">create one</a>.</li>
     * <li><b>ETH:</b> Obtain <code>xpub</code> from the <a
     * href="https://apidoc.tatum.io/tag/Ethereum#operation/EthGenerateWallet"
     * target="_blank">generated wallet</a>.</li>
     * <li><b>FLOW:</b> Obtain <code>xpub</code> from the <a
     * href="https://apidoc.tatum.io/tag/Flow#operation/FlowGenerateWallet"
     * target="_blank">generated wallet</a>.</li>
     * <li><b>KCS:</b> Obtain <code>xpub</code> from the <a
     * href="https://apidoc.tatum.io/tag/KuCoin#operation/KcsGenerateWallet"
     * target="_blank">generated wallet</a>.</li>
     * <li><b>KLAY:</b> Obtain <code>xpub</code> from the <a
     * href="https://apidoc.tatum.io/tag/Klaytn#operation/KlaytnGenerateWallet"
     * target="_blank">generated wallet</a>.</li>
     * <li><b>LTC:</b> Obtain <code>xpub</code> from the <a
     * href="https://apidoc.tatum.io/tag/Litecoin#operation/LtcGenerateWallet"
     * target="_blank">generated wallet</a>.</li>
     * <li><b>MATIC:</b> Obtain <code>xpub</code> from the <a
     * href="https://apidoc.tatum.io/tag/Polygon#operation/PolygonGenerateWallet"
     * target="_blank">generated wallet</a>.</li>
     * <li><b>SOL:</b> No <code>xpub</code> provided; use <code>address</code> from the <a
     * href="https://apidoc.tatum.io/tag/Solana#operation/SolanaGenerateWallet"
     * target="_blank">generated wallet</a> instead.</li>
     * <li><b>TRON:</b> Obtain <code>xpub</code> from the <a
     * href="https://apidoc.tatum.io/tag/Tron#operation/GenerateTronwallet"
     * target="_blank">generated wallet</a>.</li>
     * <li><b>XDC:</b> Obtain <code>xpub</code> from the <a
     * href="https://apidoc.tatum.io/tag/XinFin#operation/XdcGenerateWallet"
     * target="_blank">generated wallet</a>.</li>
     * <li><b>XLM:</b> No <code>xpub</code> provided; use <code>address</code> from the <a
     * href="https://apidoc.tatum.io/tag/Stellar#operation/XlmWallet" target="_blank">generated
     * account</a> instead.</li>
     * <li><b>XRP:</b> No <code>xpub</code> provided; use <code>address</code> from the <a
     * href="https://apidoc.tatum.io/tag/XRP#operation/XrpWallet" target="_blank">generated
     * account</a> instead.</li>
     * </ul>
     * <p><b>Connect a virtual account to the blockchain</b></p>
     * <ul>
     * <li>If the virtual account was created with the wallet's <code>xpub</code>, <a
     * href="https://apidoc.tatum.io/tag/Blockchain-addresses#operation/generateDepositAddress"
     * target="_blank">generate a new blockchain address</a> for this account.</li>
     * <li>If the virtual account was created with the wallet's or account's address instead of
     * the wallet's <code>xpub</code>, <a
     * href="https://apidoc.tatum.io/tag/Blockchain-addresses#operation/assignAddress"
     * target="_blank">assign an existing blockchain address</a> to this account.</li>
     * </ul>
     * <p>You can connect multiple blockchain addresses to one virtual account.</p>
     * <p>Digital assets:</p>
     * <ul>
     * <li><b>USDC_MATIC</b> refers to contract
     * <code>0x2791bca1f2de4661ed88a30c99a7a9449aa84174</code> on Polygon mainnet.</li>
     * <li><b>USDC_MATIC_NATIVE</b> refers to contract
     * <code>0x3c499c542cef5e3811e1192ce70d8cc03d5c3359</code> on Polygon mainnet.</li>
     * </ul>
     *
     *
     * @summary Create a virtual account
     * @throws FetchError<400, types.CreateAccountResponse400> Bad Request
     * @throws FetchError<401, types.CreateAccountResponse401> Unauthorized. Not valid or inactive subscription key present in the HTTP Header.
     * @throws FetchError<403, types.CreateAccountResponse403> Forbidden. The request is authenticated, but it is not possible to perform the required
     * operation due to a logical error or invalid permissions.
     * @throws FetchError<500, types.CreateAccountResponse500> Internal server error. There was an error on the server during the processing of the
     * request.
     */
    SDK.prototype.createAccount = function (body) {
        return this.core.fetch('/v3/ledger/account', 'post', body);
    };
    /**
     * <h4>1 credit per API call.</h4><br/><p>Lists all accounts. Inactive accounts are also
     * visible.</p>
     *
     * @summary List all accounts
     * @throws FetchError<400, types.GetAccountsResponse400> Bad Request
     * @throws FetchError<401, types.GetAccountsResponse401> Unauthorized. Not valid or inactive subscription key present in the HTTP Header.
     * @throws FetchError<403, types.GetAccountsResponse403> Forbidden. The request is authenticated, but it is not possible to perform the
     * operation due to logical error or invalid permissions.
     * @throws FetchError<500, types.GetAccountsResponse500> Internal server error. There was an error on the server during the processing of the
     * request.
     */
    SDK.prototype.getAccounts = function (metadata) {
        return this.core.fetch('/v3/ledger/account', 'get', metadata);
    };
    /**
     * <h4>1 credit per API call.</h4><br/><p>Count of accounts that were found from
     * /v3/ledger/account</p>
     *
     * @summary Count of found entities for get accounts request
     * @throws FetchError<400, types.GetAccountsCountResponse400> Bad Request
     * @throws FetchError<401, types.GetAccountsCountResponse401> Unauthorized. Not valid or inactive subscription key present in the HTTP Header.
     * @throws FetchError<403, types.GetAccountsCountResponse403> Forbidden. The request is authenticated, but it is not possible to perform the
     * operation due to logical error or invalid permissions.
     * @throws FetchError<500, types.GetAccountsCountResponse500> Internal server error. There was an error on the server during the processing of the
     * request.
     */
    SDK.prototype.getAccountsCount = function (metadata) {
        return this.core.fetch('/v3/ledger/account/count', 'get', metadata);
    };
    /**
     * <h4>2 credits per API call + 1 credit for every account created.</h4><br/>
     * <p>Creates new accounts for the customer in a batch call.</p>
     *
     *
     * @summary Create multiple accounts in a batch call
     * @throws FetchError<400, types.CreateAccountBatchResponse400> Bad Request
     * @throws FetchError<401, types.CreateAccountBatchResponse401> Unauthorized. Not valid or inactive subscription key present in the HTTP Header.
     * @throws FetchError<403, types.CreateAccountBatchResponse403> Forbidden. The request is authenticated, but it is not possible to perform the required
     * operation due to a logical error or invalid permissions.
     * @throws FetchError<500, types.CreateAccountBatchResponse500> Internal server error. There was an error on the server during the processing of the
     * request.
     */
    SDK.prototype.createAccountBatch = function (body) {
        return this.core.fetch('/v3/ledger/account/batch', 'post', body);
    };
    /**
     * <h4>1 credit per API call.</h4><br/><p>Lists all accounts associated with a customer.
     * Only active accounts are visible.</p>
     *
     * @summary List all customer accounts
     * @throws FetchError<400, types.GetAccountsByCustomerIdResponse400> Bad Request
     * @throws FetchError<401, types.GetAccountsByCustomerIdResponse401> Unauthorized. Not valid or inactive subscription key present in the HTTP Header.
     * @throws FetchError<403, types.GetAccountsByCustomerIdResponse403> Forbidden. The request is authenticated, but it is not possible to perform the
     * operation due to logical error or invalid permissions.
     * @throws FetchError<500, types.GetAccountsByCustomerIdResponse500> Internal server error. There was an error on the server during the processing of the
     * request.
     */
    SDK.prototype.getAccountsByCustomerId = function (metadata) {
        return this.core.fetch('/v3/ledger/account/customer/{id}', 'get', metadata);
    };
    /**
     * <h4>1 credit per API call.</h4><br/><p>Gets active account by ID. Displays all
     * information regarding the given account.</p>
     *
     * @summary Get account by ID
     * @throws FetchError<400, types.GetAccountByAccountIdResponse400> Bad Request
     * @throws FetchError<401, types.GetAccountByAccountIdResponse401> Unauthorized. Not valid or inactive subscription key present in the HTTP Header.
     * @throws FetchError<403, types.GetAccountByAccountIdResponse403> Forbidden. The request is authenticated, but it is not possible to perform the required
     * operation due to a logical error or invalid permissions.
     * @throws FetchError<500, types.GetAccountByAccountIdResponse500> Internal server error. There was an error on the server during the processing of the
     * request.
     */
    SDK.prototype.getAccountByAccountId = function (metadata) {
        return this.core.fetch('/v3/ledger/account/{id}', 'get', metadata);
    };
    /**
     * <h4>2 credits per API call.</h4><br/><p>Update account by ID. Only a small number of
     * fields can be updated.</p>
     *
     * @summary Update account
     * @throws FetchError<400, types.UpdateAccountByAccountIdResponse400> Bad Request
     * @throws FetchError<401, types.UpdateAccountByAccountIdResponse401> Unauthorized. Not valid or inactive subscription key present in the HTTP Header.
     * @throws FetchError<403, types.UpdateAccountByAccountIdResponse403> Forbidden. The request is authenticated, but it is not possible to perform the required
     * operation due to a logical error or invalid permissions.
     * @throws FetchError<500, types.UpdateAccountByAccountIdResponse500> Internal server error. There was an error on the server during the processing of the
     * request.
     */
    SDK.prototype.updateAccountByAccountId = function (body, metadata) {
        return this.core.fetch('/v3/ledger/account/{id}', 'put', body, metadata);
    };
    /**
     * <h4>1 credit per API call.</h4><br/><p>Get balance for the account.</p>
     *
     * @summary Get account balance
     * @throws FetchError<400, types.GetAccountBalanceResponse400> Bad Request
     * @throws FetchError<401, types.GetAccountBalanceResponse401> Unauthorized. Not valid or inactive subscription key present in the HTTP Header.
     * @throws FetchError<403, types.GetAccountBalanceResponse403> Forbidden. The request is authenticated, but it is not possible to perform the required
     * operation due to a logical error or invalid permissions.
     * @throws FetchError<500, types.GetAccountBalanceResponse500> Internal server error. There was an error on the server during the processing of the
     * request.
     */
    SDK.prototype.getAccountBalance = function (metadata) {
        return this.core.fetch('/v3/ledger/account/{id}/balance', 'get', metadata);
    };
    /**
     * <h4>2 credits per API call.</h4><br/>
     * <p>Blocks an amount in an account. Any number of distinct amounts can be blocked in one
     * account.
     * Every new blockage has its own distinct ID, which is used as a reference. When the
     * amount is blocked, it is debited from the available balance of the account.
     * The account balance remains the same. The account balance represents the total amount of
     * funds in the account. The available balance represents the total amount of funds that
     * can be used to perform transactions. When an account is frozen, the available balance is
     * set to 0 minus all blockages for the account.</p>
     *
     *
     * @summary Block an amount in an account
     * @throws FetchError<400, types.BlockAmountResponse400> Bad Request
     * @throws FetchError<401, types.BlockAmountResponse401> Unauthorized. Not valid or inactive subscription key present in the HTTP Header.
     * @throws FetchError<403, types.BlockAmountResponse403> Forbidden. The request is authenticated, but it is not possible to perform the required
     * operation due to a logical error or invalid permissions.
     * @throws FetchError<500, types.BlockAmountResponse500> Internal server error. There was an error on the server during the processing of the
     * request.
     */
    SDK.prototype.blockAmount = function (body, metadata) {
        return this.core.fetch('/v3/ledger/account/block/{id}', 'post', body, metadata);
    };
    /**
     * <h4>2 credits per API call.</h4><br/>
     * <p>Unblocks a previously blocked amount in an account and invokes a ledger transaction
     * from that account to a different recipient.
     * If the request fails, the amount is not unblocked.</p>
     *
     *
     * @summary Unblock an amount in an account and perform a transaction
     * @throws FetchError<400, types.UnblockAmountWithTransactionResponse400> Bad Request
     * @throws FetchError<401, types.UnblockAmountWithTransactionResponse401> Unauthorized. Not valid or inactive subscription key present in the HTTP Header.
     * @throws FetchError<403, types.UnblockAmountWithTransactionResponse403> Forbidden. The request is authenticated, but it is not possible to perform the required
     * operation due to a logical error or invalid permissions.
     * @throws FetchError<500, types.UnblockAmountWithTransactionResponse500> Internal server error. There was an error on the server during the processing of the
     * request.
     */
    SDK.prototype.unblockAmountWithTransaction = function (body, metadata) {
        return this.core.fetch('/v3/ledger/account/block/{id}', 'put', body, metadata);
    };
    /**
     * <h4>1 credit per API call.</h4><br/><p>Unblocks a previously blocked amount in an
     * account. Increases the available balance in the account where the amount was
     * blocked.</p>
     *
     * @summary Unblock a blocked amount in an account
     * @throws FetchError<400, types.DeleteBlockAmountResponse400> Bad Request
     * @throws FetchError<401, types.DeleteBlockAmountResponse401> Unauthorized. Not valid or inactive subscription key present in the HTTP Header.
     * @throws FetchError<403, types.DeleteBlockAmountResponse403> Forbidden. The request is authenticated, but it is not possible to perform the
     * operation due to logical error or invalid permissions.
     * @throws FetchError<500, types.DeleteBlockAmountResponse500> Internal server error. There was an error on the server during the processing of the
     * request.
     */
    SDK.prototype.deleteBlockAmount = function (metadata) {
        return this.core.fetch('/v3/ledger/account/block/{id}', 'delete', metadata);
    };
    /**
     * <h4>1 credit per API call.</h4><br/><p>Gets blocked amounts for an account.</p>
     *
     * @summary Get blocked amounts in an account
     * @throws FetchError<400, types.GetBlockAmountResponse400> Bad Request
     * @throws FetchError<401, types.GetBlockAmountResponse401> Unauthorized. Not valid or inactive subscription key present in the HTTP Header.
     * @throws FetchError<500, types.GetBlockAmountResponse500> Internal server error. There was an error on the server during the processing of the
     * request.
     */
    SDK.prototype.getBlockAmount = function (metadata) {
        return this.core.fetch('/v3/ledger/account/block/{id}', 'get', metadata);
    };
    /**
     * <h4>1 credit per API call.</h4><br/><p>Gets blocked amount by id.</p>
     *
     * @summary Get blocked amount by ID
     * @throws FetchError<400, types.GetBlockAmountByIdResponse400> Bad Request
     * @throws FetchError<401, types.GetBlockAmountByIdResponse401> Unauthorized. Not valid or inactive subscription key present in the HTTP Header.
     * @throws FetchError<500, types.GetBlockAmountByIdResponse500> Internal server error. There was an error on the server during the processing of the
     * request.
     */
    SDK.prototype.getBlockAmountById = function (metadata) {
        return this.core.fetch('/v3/ledger/account/block/{id}/detail', 'get', metadata);
    };
    /**
     * <h4>1 credit per API call, 1 credit for each deleted blockage. 1 API call + 2 blockages
     * = 3 credits.</h4><br/><p>Unblocks previously blocked amounts in an account. Increases
     * the available balance in the account where the amount was blocked.</p>
     *
     * @summary Unblock all blocked amounts in an account
     * @throws FetchError<400, types.DeleteAllBlockAmountResponse400> Bad Request
     * @throws FetchError<401, types.DeleteAllBlockAmountResponse401> Unauthorized. Not valid or inactive subscription key present in the HTTP Header.
     * @throws FetchError<403, types.DeleteAllBlockAmountResponse403> Forbidden. The request is authenticated, but it is not possible to perform the required
     * operation due to a logical error or invalid permissions.
     * @throws FetchError<500, types.DeleteAllBlockAmountResponse500> Internal server error. There was an error on the server during the processing of the
     * request.
     */
    SDK.prototype.deleteAllBlockAmount = function (metadata) {
        return this.core.fetch('/v3/ledger/account/block/account/{id}', 'delete', metadata);
    };
    /**
     * <h4>2 credits per API call.</h4><br/><p>Activates an account.</p>
     *
     * @summary Activate account
     * @throws FetchError<400, types.ActivateAccountResponse400> Bad Request
     * @throws FetchError<401, types.ActivateAccountResponse401> Unauthorized. Not valid or inactive subscription key present in the HTTP Header.
     * @throws FetchError<403, types.ActivateAccountResponse403> Forbidden. The request is authenticated, but it is not possible to perform the required
     * operation due a to logical error or invalid permissions.
     * @throws FetchError<500, types.ActivateAccountResponse500> Internal server error. There was an error on the server during the processing of the
     * request.
     */
    SDK.prototype.activateAccount = function (metadata) {
        return this.core.fetch('/v3/ledger/account/{id}/activate', 'put', metadata);
    };
    /**
     * <h4>2 credits per API call.</h4><br/><p>Deactivates an account. Only accounts with
     * account and available balances of zero can be deactivated. Deactivated accounts are not
     * visible in the list of accounts, it is not possible to send funds to these accounts or
     * perform transactions. However, they are still present in the ledger and all transaction
     * histories.</p>
     *
     * @summary Deactivate account
     * @throws FetchError<400, types.DeactivateAccountResponse400> Bad Request
     * @throws FetchError<401, types.DeactivateAccountResponse401> Unauthorized. Not valid or inactive subscription key present in the HTTP Header.
     * @throws FetchError<403, types.DeactivateAccountResponse403> Forbidden. The request is authenticated, but it is not possible to perform the required
     * operation due to a logical error or invalid permissions.
     * @throws FetchError<500, types.DeactivateAccountResponse500> Internal server error. There was an error on the server during the processing of the
     * request.
     */
    SDK.prototype.deactivateAccount = function (metadata) {
        return this.core.fetch('/v3/ledger/account/{id}/deactivate', 'put', metadata);
    };
    /**
     * <h4>2 credits per API call.</h4><br/><p>Disables all outgoing transactions. Incoming
     * transactions to the account are available. When an account is frozen, its available
     * balance is set to 0. This operation will create a new blockage of type ACCOUNT_FROZEN,
     * which is automatically deleted when the account is unfrozen.</p>
     *
     * @summary Freeze account
     * @throws FetchError<400, types.FreezeAccountResponse400> Bad Request
     * @throws FetchError<401, types.FreezeAccountResponse401> Unauthorized. Not valid or inactive subscription key present in the HTTP Header.
     * @throws FetchError<403, types.FreezeAccountResponse403> Forbidden. The request is authenticated, but it is not possible to perform the required
     * operation due to a logical error or invalid permissions.
     * @throws FetchError<500, types.FreezeAccountResponse500> Internal server error. There was an error on the server during the processing of the
     * request.
     */
    SDK.prototype.freezeAccount = function (metadata) {
        return this.core.fetch('/v3/ledger/account/{id}/freeze', 'put', metadata);
    };
    /**
     * <h4>2 credits per API call.</h4><br/><p>Unfreezes a previously frozen account.
     * Unfreezing a non-frozen account not affect the account.</p>
     *
     * @summary Unfreeze account
     * @throws FetchError<400, types.UnfreezeAccountResponse400> Bad Request
     * @throws FetchError<401, types.UnfreezeAccountResponse401> Unauthorized. Not valid or inactive subscription key present in the HTTP Header.
     * @throws FetchError<403, types.UnfreezeAccountResponse403> Forbidden. The request is authenticated, but it is not possible to perform the required
     * operation due to a logical error or invalid permissions.
     * @throws FetchError<500, types.UnfreezeAccountResponse500> Internal server error. There was an error on the server during the processing of the
     * request.
     */
    SDK.prototype.unfreezeAccount = function (metadata) {
        return this.core.fetch('/v3/ledger/account/{id}/unfreeze', 'put', metadata);
    };
    /**
     * <h4>4 credits per API call.</h4><br/>
     * <p>Sends a payment within Tatum Private Ledger. All assets are settled instantly.<br/>
     * When a transaction is settled, 2 transaction records are created, 1 for each of the
     * participants. These 2 records are connected via a transaction reference, which is the
     * same for both of them.<br/>
     * This method is only used for transferring assets between accounts within Tatum and will
     * not send any funds to blockchain addresses.<br/>
     * If there is an insufficient balance in the sender account, no transaction is
     * recorded.<br/>
     * It is possible to perform an anonymous transaction where the sender account is not
     * visible for the recipient.<br/>
     * The FIAT currency value of every transaction is calculated automatically. The FIAT value
     * is based on the accountingCurrency of the account connected to the transaction and is
     * available in the marketValue parameter of the transaction.</p>
     *
     *
     * @summary Send payment
     * @throws FetchError<400, types.SendTransactionResponse400> Bad Request
     * @throws FetchError<401, types.SendTransactionResponse401> Unauthorized. Not valid or inactive subscription key present in the HTTP Header.
     * @throws FetchError<403, types.SendTransactionResponse403> Forbidden. The request is authenticated, but it is not possible to perform the required
     * operation due to a logical error or invalid permissions.
     * @throws FetchError<500, types.SendTransactionResponse500> Internal server error. There was an error on the server during the processing of the
     * request.
     */
    SDK.prototype.sendTransaction = function (body) {
        return this.core.fetch('/v3/ledger/transaction', 'post', body);
    };
    /**
     * <h4>2 + 2 * N per API call. (N - count of transactions)</h4><br/>
     * <p>Sends the N payments within Tatum Private Ledger. All assets are settled
     * instantly.<br/>
     * When a transaction is settled, 2 transaction records are created, 1 for each of the
     * participants. These 2 records are connected via a transaction reference, which is the
     * same for both of them.<br/>
     * This method is only used for transferring assets between accounts within Tatum and will
     * not send any funds to blockchain addresses.<br/>
     * If there is an insufficient balance in the sender account, no transaction is
     * recorded.<br/>
     * It is possible to perform an anonymous transaction where the sender account is not
     * visible for the recipient.<br/>
     * The FIAT currency value of every transaction is calculated automatically. The FIAT value
     * is based on the accountingCurrency of the account connected to the transaction and is
     * available in the marketValue parameter of the transaction.</p>
     *
     *
     * @summary Send payment in batch
     * @throws FetchError<400, types.SendTransactionBatchResponse400> Bad Request
     * @throws FetchError<401, types.SendTransactionBatchResponse401> Unauthorized. Not valid or inactive subscription key present in the HTTP Header.
     * @throws FetchError<403, types.SendTransactionBatchResponse403> Forbidden. The request is authenticated, but it is not possible to perform the required
     * operation due to a logical error or invalid permissions.
     * @throws FetchError<500, types.SendTransactionBatchResponse500> Internal server error. There was an error on the server during the processing of the
     * request.
     */
    SDK.prototype.sendTransactionBatch = function (body) {
        return this.core.fetch('/v3/ledger/transaction/batch', 'post', body);
    };
    /**
     * <h4>1 credit per API call.</h4><br/><p>Finds transactions for the account identified by
     * the given account ID.</p>
     *
     * @summary Find transactions for account.
     * @throws FetchError<400, types.GetTransactionsByAccountIdResponse400> Bad Request
     * @throws FetchError<401, types.GetTransactionsByAccountIdResponse401> Unauthorized. Not valid or inactive subscription key present in the HTTP Header.
     * @throws FetchError<500, types.GetTransactionsByAccountIdResponse500> Internal server error. There was an error on the server during the processing of the
     * request.
     */
    SDK.prototype.getTransactionsByAccountId = function (body, metadata) {
        return this.core.fetch('/v3/ledger/transaction/account', 'post', body, metadata);
    };
    /**
     * <h4>1 credit per API call.</h4><br/><p>Finds transactions for all accounts of the
     * customer identified by the given internal customer ID.</p>
     *
     * @summary Find transactions for a customer across all of the customer's accounts.
     * @throws FetchError<400, types.GetTransactionsByCustomerIdResponse400> Bad Request
     * @throws FetchError<401, types.GetTransactionsByCustomerIdResponse401> Unauthorized. Not valid or inactive subscription key present in the HTTP Header.
     * @throws FetchError<500, types.GetTransactionsByCustomerIdResponse500> Internal server error. There was an error on the server during the processing of the
     * request.
     */
    SDK.prototype.getTransactionsByCustomerId = function (body, metadata) {
        return this.core.fetch('/v3/ledger/transaction/customer', 'post', body, metadata);
    };
    /**
     * <h4>1 credit per API call.</h4><br/><p>Find transactions across whole ledger.</p>
     *
     * @summary Find transactions within the ledger.
     * @throws FetchError<400, types.GetTransactionsResponse400> Bad Request
     * @throws FetchError<401, types.GetTransactionsResponse401> Unauthorized. Not valid or inactive subscription key present in the HTTP Header.
     * @throws FetchError<500, types.GetTransactionsResponse500> Internal server error. There was an error on the server during the processing of the
     * request.
     */
    SDK.prototype.getTransactions = function (body, metadata) {
        return this.core.fetch('/v3/ledger/transaction/ledger', 'post', body, metadata);
    };
    /**
     * <h4>1 credit per API call.</h4><br/><p>Finds transactions for all accounts with the
     * given reference.</p>
     *
     * @summary Find transactions with a given reference across all accounts.
     * @throws FetchError<400, types.GetTransactionsByReferenceResponse400> Bad Request
     * @throws FetchError<401, types.GetTransactionsByReferenceResponse401> Unauthorized. Not valid or inactive subscription key present in the HTTP Header.
     * @throws FetchError<500, types.GetTransactionsByReferenceResponse500> Internal server error. There was an error on the server during the processing of the
     * request.
     */
    SDK.prototype.getTransactionsByReference = function (metadata) {
        return this.core.fetch('/v3/ledger/transaction/reference/{reference}', 'get', metadata);
    };
    /**
     * <h4>1 credit per API call.</h4><br/><p>Lists all deposits for API key.</p>
     *
     * @summary List all deposits for product
     * @throws FetchError<400, types.GetDepositsResponse400> Bad Request
     * @throws FetchError<401, types.GetDepositsResponse401> Unauthorized. Not valid or inactive subscription key present in the HTTP Header.
     * @throws FetchError<500, types.GetDepositsResponse500> Internal server error. There was an error on the server during the processing of the
     * request.
     */
    SDK.prototype.getDeposits = function (metadata) {
        return this.core.fetch('/v3/ledger/deposits', 'get', metadata);
    };
    /**
     * <h4>1 credit per API call.</h4><br/><p>Counts total entities found by get deposits
     * request.</p>
     *
     * @summary Count of found entities for get deposits request
     * @throws FetchError<400, types.GetDepositsCountResponse400> Bad Request
     * @throws FetchError<401, types.GetDepositsCountResponse401> Unauthorized. Not valid or inactive subscription key present in the HTTP Header.
     * @throws FetchError<500, types.GetDepositsCountResponse500> Internal server error. There was an error on the server during the processing of the
     * request.
     */
    SDK.prototype.getDepositsCount = function (metadata) {
        return this.core.fetch('/v3/ledger/deposits/count', 'get', metadata);
    };
    /**
     * <h4>1 credit per API call.</h4><br/>
     * <p>List of all customers. Also inactive an disabled customers are present.</p>
     *
     *
     * @summary List all customers
     * @throws FetchError<400, types.FindAllCustomersResponse400> Bad Request
     * @throws FetchError<401, types.FindAllCustomersResponse401> Unauthorized. Not valid or inactive subscription key present in the HTTP Header.
     * @throws FetchError<500, types.FindAllCustomersResponse500> Internal server error. There was an error on the server during the processing of the
     * request.
     */
    SDK.prototype.findAllCustomers = function (metadata) {
        return this.core.fetch('/v3/ledger/customer', 'get', metadata);
    };
    /**
     * <h4>1 credit per API call.</h4><br/><p>Using anonymized external ID or internal customer
     * ID you can access customer detail information. Internal ID is needed to call other
     * customer related methods.</p>
     *
     * @summary Get customer details
     * @throws FetchError<400, types.GetCustomerByExternalOrInternalIdResponse400> Bad Request
     * @throws FetchError<401, types.GetCustomerByExternalOrInternalIdResponse401> Unauthorized. Not valid or inactive subscription key present in the HTTP Header.
     * @throws FetchError<403, types.GetCustomerByExternalOrInternalIdResponse403> Forbidden. The request is authenticated, but it is not possible to required perform
     * operation due to logical error or invalid permissions.
     * @throws FetchError<500, types.GetCustomerByExternalOrInternalIdResponse500> Internal server error. There was an error on the server during the processing of the
     * request.
     */
    SDK.prototype.getCustomerByExternalOrInternalId = function (metadata) {
        return this.core.fetch('/v3/ledger/customer/{id}', 'get', metadata);
    };
    /**
     * <h4>2 credits per API call.</h4><br/><p>This method is helpful in case your primary
     * system will change ID's or customer will change the country he/she is supposed to be in
     * compliance with.</p>
     *
     * @summary Update customer
     * @throws FetchError<400, types.UpdateCustomerResponse400> Bad Request
     * @throws FetchError<401, types.UpdateCustomerResponse401> Unauthorized. Not valid or inactive subscription key present in the HTTP Header.
     * @throws FetchError<403, types.UpdateCustomerResponse403> Forbidden. The request is authenticated, but it is not possible to required perform
     * operation due to logical error or invalid permissions.
     * @throws FetchError<500, types.UpdateCustomerResponse500> Internal server error. There was an error on the server during the processing of the
     * request.
     */
    SDK.prototype.updateCustomer = function (body, metadata) {
        return this.core.fetch('/v3/ledger/customer/{id}', 'put', body, metadata);
    };
    /**
     * <h4>2 credits per API call.</h4><br/><p>Activated customer is able to do any
     * operation.</p>
     *
     * @summary Activate customer
     * @throws FetchError<400, types.ActivateCustomerResponse400> Bad Request
     * @throws FetchError<401, types.ActivateCustomerResponse401> Unauthorized. Not valid or inactive subscription key present in the HTTP Header.
     * @throws FetchError<403, types.ActivateCustomerResponse403> Forbidden. The request is authenticated, but it is not possible to required perform
     * operation due to logical error or invalid permissions.
     * @throws FetchError<500, types.ActivateCustomerResponse500> Internal server error. There was an error on the server during the processing of the
     * request.
     */
    SDK.prototype.activateCustomer = function (metadata) {
        return this.core.fetch('/v3/ledger/customer/{id}/activate', 'put', metadata);
    };
    /**
     * <h4>2 credits per API call.</h4><br/><p>Deactivate customer is not able to do any
     * operation. Customer can be deactivated only when all their accounts are already
     * deactivated.</p>
     *
     * @summary Deactivate customer
     * @throws FetchError<400, types.DeactivateCustomerResponse400> Bad Request
     * @throws FetchError<401, types.DeactivateCustomerResponse401> Unauthorized. Not valid or inactive subscription key present in the HTTP Header.
     * @throws FetchError<403, types.DeactivateCustomerResponse403> Forbidden. The request is authenticated, but it is not possible to required perform
     * operation due to logical error or invalid permissions.
     * @throws FetchError<500, types.DeactivateCustomerResponse500> Internal server error. There was an error on the server during the processing of the
     * request.
     */
    SDK.prototype.deactivateCustomer = function (metadata) {
        return this.core.fetch('/v3/ledger/customer/{id}/deactivate', 'put', metadata);
    };
    /**
     * <h4>2 credits per API call.</h4><br/><p>Enabled customer can perform all operations. By
     * default all customers are enabled. All previously blocked account balances will be
     * unblocked.</p>
     *
     * @summary Enable customer
     * @throws FetchError<400, types.EnableCustomerResponse400> Bad Request
     * @throws FetchError<401, types.EnableCustomerResponse401> Unauthorized. Not valid or inactive subscription key present in the HTTP Header.
     * @throws FetchError<403, types.EnableCustomerResponse403> Forbidden. The request is authenticated, but it is not possible to required perform
     * operation due to logical error or invalid permissions.
     * @throws FetchError<500, types.EnableCustomerResponse500> Internal server error. There was an error on the server during the processing of the
     * request.
     */
    SDK.prototype.enableCustomer = function (metadata) {
        return this.core.fetch('/v3/ledger/customer/{id}/enable', 'put', metadata);
    };
    /**
     * <h4>2 credits per API call.</h4><br/><p>Disabled customer cannot perform end-user
     * operations, such as create new accounts or send transactions. Available balance on all
     * accounts is set to 0. Account balance will stay untouched.</p>
     *
     * @summary Disable customer
     * @throws FetchError<400, types.DisableCustomerResponse400> Bad Request
     * @throws FetchError<401, types.DisableCustomerResponse401> Unauthorized. Not valid or inactive subscription key present in the HTTP Header.
     * @throws FetchError<403, types.DisableCustomerResponse403> Forbidden. The request is authenticated, but it is not possible to required perform
     * operation due to logical error or invalid permissions.
     * @throws FetchError<500, types.DisableCustomerResponse500> Internal server error. There was an error on the server during the processing of the
     * request.
     */
    SDK.prototype.disableCustomer = function (metadata) {
        return this.core.fetch('/v3/ledger/customer/{id}/disable', 'put', metadata);
    };
    /**
     * <p><b>2 credits per API call</b></p>
     * <p>Create new virtual currency with given supply stored in account. This will create
     * Tatum internal virtual currency. Every virtual currency must be prefixed with
     * <b>VC_</b>.</p>
     * <p>Every virtual currency must be pegged to existing FIAT or supported cryptocurrency. 1
     * unit of virtual currency has then the same amount as 1 unit of the base currency it is
     * pegged to. It is possible to set a custom base rate for the virtual currency. (baseRate
     * = 2 => 1 VC unit = 2 basePair units)</p>
     * <p>Tatum virtual currency acts as any other asset within Tatum. To create a fungible
     * token, see the <a
     * href="https://apidoc.tatum.io/tag/Fungible-Tokens-(ERC-20-or-compatible)#operation/Erc20Deploy"
     * target="_blank">API for deploying a fungible token smart contract</a>.</p>
     * <p>This operation returns the newly created Tatum Ledger account with an initial balance
     * set to the virtual currency's total supply. Total supply can be changed in the
     * future.</p>
     * <p>Digital assets:</p>
     * <ul>
     * <li><b>USDC_MATIC</b> refers to contract
     * <code>0x2791bca1f2de4661ed88a30c99a7a9449aa84174</code> on Polygon mainnet.</li>
     * <li><b>USDC_MATIC_NATIVE</b> refers to contract
     * <code>0x3c499c542cef5e3811e1192ce70d8cc03d5c3359</code> on Polygon mainnet.</li>
     * </ul>
     *
     *
     * @summary Create new virtual currency
     * @throws FetchError<400, types.CreateCurrencyResponse400> Bad Request
     * @throws FetchError<401, types.CreateCurrencyResponse401> Unauthorized. Not valid or inactive subscription key present in the HTTP Header.
     * @throws FetchError<403, types.CreateCurrencyResponse403> Forbidden. The request is authenticated, but it is not possible to required perform
     * operation due to logical error or invalid permissions.
     * @throws FetchError<500, types.CreateCurrencyResponse500> Internal server error. There was an error on the server during the processing of the
     * request.
     */
    SDK.prototype.createCurrency = function (body) {
        return this.core.fetch('/v3/ledger/virtualCurrency', 'post', body);
    };
    /**
     * <h4>2 credits per API call.</h4><br/><p>Change base pair and/or base rate of existing
     * virtual currency.</p>
     *
     * @summary Update virtual currency
     * @throws FetchError<400, types.UpdateCurrencyResponse400> Bad Request
     * @throws FetchError<401, types.UpdateCurrencyResponse401> Unauthorized. Not valid or inactive subscription key present in the HTTP Header.
     * @throws FetchError<403, types.UpdateCurrencyResponse403> Forbidden. The request is authenticated, but it is not possible to required perform
     * operation due to logical error or invalid permissions.
     * @throws FetchError<500, types.UpdateCurrencyResponse500> Internal server error. There was an error on the server during the processing of the
     * request.
     */
    SDK.prototype.updateCurrency = function (body) {
        return this.core.fetch('/v3/ledger/virtualCurrency', 'put', body);
    };
    /**
     * <p><b>1 credit per API call</b></p>
     * <p>Get detail of virtual currency.</p>
     *
     *
     * @summary Get virtual currency
     * @throws FetchError<400, types.GetCurrencyResponse400> Bad Request
     * @throws FetchError<401, types.GetCurrencyResponse401> Unauthorized. Not valid or inactive subscription key present in the HTTP Header.
     * @throws FetchError<403, types.GetCurrencyResponse403> Forbidden. The request is authenticated, but it is not possible to required perform
     * operation due to logical error or invalid permissions.
     * @throws FetchError<500, types.GetCurrencyResponse500> Internal server error. There was an error on the server during the processing of the
     * request.
     */
    SDK.prototype.getCurrency = function (metadata) {
        return this.core.fetch('/v3/ledger/virtualCurrency/{name}', 'get', metadata);
    };
    /**
     * <p><b>2 credits per API call</b></p>
     * <p>Create new supply of virtual currency linked on the given accountId. Method increases
     * the total supply of the currency.</p>
     * <p>This method creates Ledger transaction with operationType MINT with undefined
     * counterAccountId.</p>
     *
     *
     * @summary Create new supply of virtual currency
     * @throws FetchError<400, types.MintCurrencyResponse400> Bad Request
     * @throws FetchError<401, types.MintCurrencyResponse401> Unauthorized. Not valid or inactive subscription key present in the HTTP Header.
     * @throws FetchError<403, types.MintCurrencyResponse403> Forbidden. The request is authenticated, but it is not possible to required perform
     * operation due to logical error or invalid permissions.
     * @throws FetchError<500, types.MintCurrencyResponse500> Internal server error. There was an error on the server during the processing of the
     * request.
     */
    SDK.prototype.mintCurrency = function (body) {
        return this.core.fetch('/v3/ledger/virtualCurrency/mint', 'put', body);
    };
    /**
     * <h4>2 credits per API call.</h4><br/>
     * <p>Destroy supply of virtual currency linked on the given accountId. Method decreases
     * the total supply of the currency.<br/>
     * This method creates Ledger transaction with operationType REVOKE with undefined
     * counterAccountId.</p>
     *
     *
     * @summary Destroy supply of virtual currency
     * @throws FetchError<400, types.RevokeCurrencyResponse400> Bad Request
     * @throws FetchError<401, types.RevokeCurrencyResponse401> Unauthorized. Not valid or inactive subscription key present in the HTTP Header.
     * @throws FetchError<403, types.RevokeCurrencyResponse403> Forbidden. The request is authenticated, but it is not possible to required perform
     * operation due to logical error or invalid permissions.
     * @throws FetchError<500, types.RevokeCurrencyResponse500> Internal server error. There was an error on the server during the processing of the
     * request.
     */
    SDK.prototype.revokeCurrency = function (body) {
        return this.core.fetch('/v3/ledger/virtualCurrency/revoke', 'put', body);
    };
    /**
     * <h4>2 credits for API call, 2 credits for each fill of the counter trade. 1 API call + 2
     * fills  = 6 credits.</h4><br/>
     * <p>Store new buy / sell trade. If there is trade already available to fill, fill as much
     * trades as possible.<br/>
     * It is possible to charge fees for the trades. Fees are an extra amount on top of the
     * trade amount and are paid in the currency that you going to block
     * e.g.:
     * - BUY BTC/USDT - fees will be paid in USDT
     * - SELL BTC/ETH - fees will be paid in BTC
     * </p>
     *
     * <p>
     * If you fill type of the trade with FUTURE_BUY or FUTURE_SELL the trade will behave as a
     * trade future. The trade is concluded now but will be fulfilled in future.
     * The date of fulfillment is by the “Seal Date” field. You can also block a percentage of
     * the amount until the future trade has expired.
     * </p>
     * <p>Futures can also penalize contracting parties if they don’t have the agreed balance
     * available in their accounts.
     * The penalty is calculated in the following way: Penalty amount = (Percentage of
     * incomplete deal amount because of shortage from user) × (Maximum Penalty percentage of
     * futures deal based on blocked amount and time interval) × (total blocked value).
     * </p>
     * <p>Example of the BTC/USDT trade future:</p>
     * <p>The maker creates a sell with the following properties: 1 BTC at a price of 60000
     * USDT, with a blocking percentage of 22%, a penalty percentage of 45%, a system commision
     * of 1% and with an expiration time of within 12 hours.</p>
     * <pre>
     * {
     *   "type": "FUTURE_SELL",
     *   "price": "60000",
     *   "amount": "1",
     *   "pair": "BTC/USDT",
     *   "currency1AccountId": "60a236db1b57f60d62612bf3",
     *   "currency2AccountId": "609d0696bf835c241ac2920f",
     *   "fee": 1,
     *   "feeAccountId": "609d0696bf835c251ac2920a",
     *   "attr": {
     *     "sealDate": 1621990960631,
     *     "percentBlock": 22,
     *     "percentPenalty": 45
     *   }
     * }
     * </pre>
     *
     * The taker accepts the offer with a buy and blocks 13200 USDT (60000 USDT × 0.22) in
     * their account.
     * <pre>
     * {
     *   "type": "FUTURE_BUY",
     *   "price": "60000",
     *   "amount": "1",
     *   "pair": "BTC/USDT",
     *   "currency1AccountId": "60a236db1b57f60d62612bf2",
     *   "currency2AccountId": "609d0696bf835c241ac2920a",
     *   "attr": {
     *     "sealDate": 1621990960631,
     *     "percentBlock": 22,
     *     "percentPenalty": 45
     *   }
     * }
     * </pre>
     * <p>At the time of the trade, the maker and taker have the following conditions.
     * The maker has 0.65 BTC (35% deficit) in their account and the taker has 49200 USDT (18%
     * deficit) in their account.
     * </p>
     *
     * <p>
     * The maker penalty is equal to 0.35 × 0.22 × (0.45 × 1 BTC) = 0.03465 BTC.
     * The taker penalty is equal to 0.18 × 0.22 × (0.45 × 60000 USDT) = 1069.2 USDT.
     * </p>
     * <p>
     * The system commission for the maker is 1 BTC × 1% = 0.01 BTC.
     * The system commission for the taker is 60000 USDT × 1% = 600 USDT.
     * </p>
     * <p>
     * The maker’s assets after deducting penalties and commissions equals 0.65 - 0.03465 -
     * 0.01 = 0.60535 BTC. The taker’s assets after deducting penalties and commissions equals
     * 49200 - 1069.2 - 600 = 47530.8 USDT.
     * </p>
     * <p>
     * The amount received by the maker after the trade is (0.60535 × 60000) + 1069.2 = 37390.2
     * USDT and the taker receives 0.60535 + 0.03465 = 0.64 BTC.
     * </p>
     *
     *
     * @summary Store buy / sell trade
     * @throws FetchError<400, types.StoreTradeResponse400> Bad Request
     * @throws FetchError<401, types.StoreTradeResponse401> Unauthorized. Not valid or inactive subscription key present in the HTTP Header.
     * @throws FetchError<403, types.StoreTradeResponse403> Forbidden. The request is authenticated, but it is not possible to required perform
     * operation due to logical error or invalid permissions.
     * @throws FetchError<500, types.StoreTradeResponse500> Internal server error. There was an error on the server during the processing of the
     * request.
     */
    SDK.prototype.storeTrade = function (body) {
        return this.core.fetch('/v3/trade', 'post', body);
    };
    /**
     * <h4>2 credits for API call.</h4><br/>
     * <p>Obtain data from the closed trades for entering in the chart. Time interval is set
     * between <i>from</i> and <i>to</i> and there is defined time frame. There can be obtained
     * at most 200 time points in the time interval.</p>
     *
     *
     * @summary Obtain chart data from historical closed trades
     * @throws FetchError<400, types.ChartRequestResponse400> Bad Request
     * @throws FetchError<401, types.ChartRequestResponse401> Unauthorized. Not valid or inactive subscription key present in the HTTP Header.
     * @throws FetchError<500, types.ChartRequestResponse500> Internal server error. There was an error on the server during the processing of the
     * request.
     */
    SDK.prototype.chartRequest = function (body, metadata) {
        return this.core.fetch('/v3/trade/chart', 'post', body, metadata);
    };
    /**
     * <h4>1 credit per API call.</h4><br/><p>List all historical trades. It is possible to
     * list all trades, trades for specific trading pair and/or account.</p>
     *
     * @summary List all historical trades
     * @throws FetchError<400, types.GetHistoricalTradesResponse400> Bad Request
     * @throws FetchError<401, types.GetHistoricalTradesResponse401> Unauthorized. Not valid or inactive subscription key present in the HTTP Header.
     * @throws FetchError<500, types.GetHistoricalTradesResponse500> Internal server error. There was an error on the server during the processing of the
     * request.
     */
    SDK.prototype.getHistoricalTrades = function (metadata) {
        return this.core.fetch('/v3/trade/history', 'get', metadata);
    };
    /**
     * <h4>1 credit per API call.</h4><br/><p>List all historical trades. It is possible to
     * list all trades, trades for specific trading pair and/or account.</p>
     *
     * @summary List all historical trades
     * @throws FetchError<400, types.GetHistoricalTradesBodyResponse400> Bad Request
     * @throws FetchError<401, types.GetHistoricalTradesBodyResponse401> Unauthorized. Not valid or inactive subscription key present in the HTTP Header.
     * @throws FetchError<500, types.GetHistoricalTradesBodyResponse500> Internal server error. There was an error on the server during the processing of the
     * request.
     */
    SDK.prototype.getHistoricalTradesBody = function (body) {
        return this.core.fetch('/v3/trade/history', 'post', body);
    };
    /**
     * <h4>1 credit per API call.</h4><br/><p>List all active buy trades.</p>
     *
     * @summary List all active buy trades
     * @throws FetchError<401, types.GetBuyTradesResponse401> Unauthorized. Not valid or inactive subscription key present in the HTTP Header.
     * @throws FetchError<500, types.GetBuyTradesResponse500> Internal server error. There was an error on the server during the processing of the
     * request.
     */
    SDK.prototype.getBuyTrades = function (metadata) {
        return this.core.fetch('/v3/trade/buy', 'get', metadata);
    };
    /**
     * <h4>1 credit per API call.</h4><br/><p>List all active buy trades.</p>
     *
     * @summary List all active buy trades
     * @throws FetchError<401, types.GetBuyTradesBodyResponse401> Unauthorized. Not valid or inactive subscription key present in the HTTP Header.
     * @throws FetchError<500, types.GetBuyTradesBodyResponse500> Internal server error. There was an error on the server during the processing of the
     * request.
     */
    SDK.prototype.getBuyTradesBody = function (body) {
        return this.core.fetch('/v3/trade/buy', 'post', body);
    };
    /**
     * <h4>1 credit per API call.</h4><br/><p>List all active sell trades.</p>
     *
     * @summary List all active sell trades
     * @throws FetchError<401, types.GetSellTradesResponse401> Unauthorized. Not valid or inactive subscription key present in the HTTP Header.
     * @throws FetchError<500, types.GetSellTradesResponse500> Internal server error. There was an error on the server during the processing of the
     * request.
     */
    SDK.prototype.getSellTrades = function (metadata) {
        return this.core.fetch('/v3/trade/sell', 'get', metadata);
    };
    /**
     * <h4>1 credit per API call.</h4><br/><p>List all active sell trades.</p>
     *
     * @summary List all active sell trades
     * @throws FetchError<401, types.GetSellTradesBodyResponse401> Unauthorized. Not valid or inactive subscription key present in the HTTP Header.
     * @throws FetchError<500, types.GetSellTradesBodyResponse500> Internal server error. There was an error on the server during the processing of the
     * request.
     */
    SDK.prototype.getSellTradesBody = function (body) {
        return this.core.fetch('/v3/trade/sell', 'post', body);
    };
    /**
     * <h4>1 credit per API call.</h4><br/><p>List all matched orders from the FUTURE_BUY OR
     * FUTURE_SELL orders.</p>
     *
     * @summary List all matched orders from FUTURE_SELL/FUTURE_BUY trades
     * @throws FetchError<401, types.GetMatchedTradesResponse401> Unauthorized. Not valid or inactive subscription key present in the HTTP Header.
     * @throws FetchError<500, types.GetMatchedTradesResponse500> Internal server error. There was an error on the server during the processing of the
     * request.
     */
    SDK.prototype.getMatchedTrades = function (body) {
        return this.core.fetch('/v3/trade/matched', 'post', body);
    };
    /**
     * <h4>1 credit for API call</h4><br/><p>Get existing opened trade.</p>
     *
     * @summary Get existing trade
     * @throws FetchError<400, types.GetTradeByIdResponse400> Bad Request
     * @throws FetchError<401, types.GetTradeByIdResponse401> Unauthorized. Not valid or inactive subscription key present in the HTTP Header.
     * @throws FetchError<500, types.GetTradeByIdResponse500> Internal server error. There was an error on the server during the processing of the
     * request.
     */
    SDK.prototype.getTradeById = function (metadata) {
        return this.core.fetch('/v3/trade/{id}', 'get', metadata);
    };
    /**
     * <h4>1 credit for API call</h4><br/><p>Cancel existing trade.</p>
     *
     * @summary Cancel existing trade
     * @throws FetchError<400, types.DeleteTradeResponse400> Bad Request
     * @throws FetchError<401, types.DeleteTradeResponse401> Unauthorized. Not valid or inactive subscription key present in the HTTP Header.
     * @throws FetchError<500, types.DeleteTradeResponse500> Internal server error. There was an error on the server during the processing of the
     * request.
     */
    SDK.prototype.deleteTrade = function (metadata) {
        return this.core.fetch('/v3/trade/{id}', 'delete', metadata);
    };
    /**
     * <h4>1 credit for API call, 1 credit for each cancelled trade. 1 API call + 2
     * cancellations  = 3 credits.</h4><br/><p>Cancel all trades for account.</p>
     *
     * @summary Cancel all existing trades for account
     * @throws FetchError<400, types.DeleteAccountTradesResponse400> Bad Request
     * @throws FetchError<401, types.DeleteAccountTradesResponse401> Unauthorized. Not valid or inactive subscription key present in the HTTP Header.
     * @throws FetchError<500, types.DeleteAccountTradesResponse500> Internal server error. There was an error on the server during the processing of the
     * request.
     */
    SDK.prototype.deleteAccountTrades = function (metadata) {
        return this.core.fetch('/v3/trade/account/{id}', 'delete', metadata);
    };
    /**
     * <p><b>2 credits per API call<br/>
     * On Flow, additional 3000 credits are consumed for <a
     * href="https://apidoc.tatum.io/tag/Flow#operation/FlowGenerateAddress"
     * target="_blank">each created address</a>.</b></p>
     * <p>Create a deposit address associated with a virtual account.</p>
     * <p>You can create multiple deposit addresses for one virtual account. When you have
     * multiple deposit addresses created for the same virtual account, you aggregate various
     * blockchain transactions from different addresses under a single account.<br/>You can
     * deposit funds from another blockchain address to a deposit address associated with the
     * virtual account, and the funds will be credited to that virtual account.</p>
     * <p><b>Scanning for incoming deposits</b><br/>
     * By default, deposit addresses are scanned for incoming deposits. Deposit addresses are
     * automatically synchronized with the associated virtual account, and you can see incoming
     * deposits on the virtual account.<br/>Scanning deposit addresses for incoming deposits
     * consumes <b>20 credits per address per day</b>.</p>
     * <p>If you want to be notified about certain events occurring on the deposit addresses,
     * <a
     * href="https://apidoc.tatum.io/tag/Notification-subscriptions#operation/createSubscription"
     * target="_blank">subscribe for notifications</a>.</p>
     * <p><b>Virtual account cryptocurrency</b></p>
     * <p>Depending on the cryptocurrency of the virtual account, this API generates:</p>
     * <ul>
     * <li><b>Public address</b> for BTC, BCH, ETH, or LTC</li>
     * <li><b>DestinationTag</b> for XRP</li>
     * <li><b>Message</b> for XLM</li>
     * </ul>
     * <p>For fore information about supported blockchains and address types, see the <a
     * href="https://apidoc.tatum.io/tag/Account#operation/createAccount" target="_blank">API
     * for creating virtual accounts</a>.</p>
     * <p>Deposit addresses are generated in the natural order of the extended public key
     * provided in the virtual account. The derivation index is the representation of that
     * order; it starts from 0 and ends at 2^31.</p>
     * <p>When a new deposit address is generated, the last not used index is used to generate
     * the address. You can skip some addresses to a different index, which means all the
     * skipped addresses will no longer be used.</p>
     *
     *
     * @summary Create a deposit address for a virtual account
     * @throws FetchError<400, types.GenerateDepositAddressResponse400> Bad Request
     * @throws FetchError<401, types.GenerateDepositAddressResponse401> Unauthorized. Not valid or inactive subscription key present in the HTTP Header.
     * @throws FetchError<403, types.GenerateDepositAddressResponse403> Forbidden. The request is authenticated, but it is not possible to required perform
     * operation due to logical error or invalid permissions.
     * @throws FetchError<500, types.GenerateDepositAddressResponse500> Internal server error. There was an error on the server during the processing of the
     * request.
     */
    SDK.prototype.generateDepositAddress = function (metadata) {
        return this.core.fetch('/v3/offchain/account/{id}/address', 'post', metadata);
    };
    /**
     * <p><b>1 credit per API call</b></p>
     * <p>Get all deposit addresses generated for a virtual account.</p>
     *
     *
     * @summary Get all deposit addresses for a virtual account
     * @throws FetchError<400, types.GetAllDepositAddressesResponse400> Bad Request
     * @throws FetchError<401, types.GetAllDepositAddressesResponse401> Unauthorized. Not valid or inactive subscription key present in the HTTP Header.
     * @throws FetchError<500, types.GetAllDepositAddressesResponse500> Internal server error. There was an error on the server during the processing of the
     * request.
     */
    SDK.prototype.getAllDepositAddresses = function (metadata) {
        return this.core.fetch('/v3/offchain/account/{id}/address', 'get', metadata);
    };
    /**
     * <p><b>2 credits per API call + 1 credit for each created address<br/>
     * On Flow, additional 3000 credits are consumed for <a
     * href="https://apidoc.tatum.io/tag/Flow#operation/FlowGenerateAddress"
     * target="_blank">each created address</a>.</b></p>
     * <p>Create multiple deposit addresses associated with a virtual account.</p>
     * <p>When you have multiple deposit addresses created for the same virtual account, you
     * aggregate various blockchain transactions from different addresses under a single
     * account.<br/>You can deposit funds from another blockchain address to a deposit address
     * associated with the virtual account, and the funds will be credited to that virtual
     * account.</p>
     * <p><b>Scanning for incoming deposits</b><br/>
     * By default, deposit addresses are scanned for incoming deposits. Deposit addresses are
     * automatically synchronized with the associated virtual account, and you can see incoming
     * deposits on the virtual account.<br/>Scanning deposit addresses for incoming deposits
     * consumes <b>20 credits per address per day</b>.</p>
     * <p>If you want to be notified about certain events occurring on the deposit addresses,
     * <a
     * href="https://apidoc.tatum.io/tag/Notification-subscriptions#operation/createSubscription"
     * target="_blank">subscribe for notifications</a>.</p>
     * <p><b>Virtual account cryptocurrency</b></p>
     * <p>Depending on the cryptocurrency of the virtual account, this API generates:</p>
     * <ul>
     * <li><b>Public address</b> for BTC, BCH, ETH, or LTC</li>
     * <li><b>DestinationTag</b> for XRP</li>
     * <li><b>Message</b> for XLM</li>
     * </ul>
     * <p>For fore information about supported blockchains and address types, see the <a
     * href="https://apidoc.tatum.io/tag/Account#operation/createAccount" target="_blank">API
     * for creating virtual accounts</a>.</p>
     * <p>Deposit addresses are generated in the natural order of the extended public key
     * provided in the virtual account. The derivation index is the representation of that
     * order; it starts from 0 and ends at 2^31.</p>
     * <p>When a new deposit address is generated, the last not used index is used to generate
     * the address. You can skip some addresses to a different index, which means all the
     * skipped addresses will no longer be used.</p>
     *
     *
     * @summary Create multiple deposit addresses for a virtual account
     * @throws FetchError<400, types.GenerateDepositAddressesBatchResponse400> Bad Request
     * @throws FetchError<401, types.GenerateDepositAddressesBatchResponse401> Unauthorized. Not valid or inactive subscription key present in the HTTP Header.
     * @throws FetchError<403, types.GenerateDepositAddressesBatchResponse403> Forbidden. The request is authenticated, but it is not possible to required perform
     * operation due to logical error or invalid permissions.
     * @throws FetchError<500, types.GenerateDepositAddressesBatchResponse500> Internal server error. There was an error on the server during the processing of the
     * request.
     */
    SDK.prototype.generateDepositAddressesBatch = function (body) {
        return this.core.fetch('/v3/offchain/account/address/batch', 'post', body);
    };
    /**
     * <p><b>1 credit per API call</b></p>
     * <p>Check whether a blockchain address with the specified cryptocurrency is registered
     * within Tatum and is assigned to a virtual account (that is, whether this blockchain
     * address is a deposit address associated with the virtual account).</p>
     * <p>If the blockchain address is assigned to a virtual account, information about this
     * account is returned. Otherwise, an error message is returned.</p>
     *
     *
     * @summary Check whether a blockchain address is assigned to a virtual account
     * @throws FetchError<400, types.AddressExistsResponse400> Bad Request
     * @throws FetchError<401, types.AddressExistsResponse401> Unauthorized. Not valid or inactive subscription key present in the HTTP Header.
     * @throws FetchError<403, types.AddressExistsResponse403> Forbidden. The request is authenticated, but it is not possible to required perform
     * operation due to logical error or invalid permissions.
     * @throws FetchError<500, types.AddressExistsResponse500> Internal server error. There was an error on the server during the processing of the
     * request.
     */
    SDK.prototype.addressExists = function (metadata) {
        return this.core.fetch('/v3/offchain/account/address/{address}/{currency}', 'get', metadata);
    };
    /**
     * <p><b>2 credits per API call</b></p>
     * <p>Assign an existing blockchain address to a virtual account. The blockchain address
     * becomes a deposit address associated with this account.</br>Use this API when the <a
     * href="https://apidoc.tatum.io/tag/Account#operation/createAccount"
     * target="_blank">virtual account has no default extended public key</a>
     * (<code>xpub</code>) and deposit addresses are handled manually.</p>
     * <p>You can assign multiple blockchain addresses to one virtual account. When you have
     * multiple blockchain addresses assigned to the same virtual account, you aggregate
     * various blockchain transactions from different addresses under a single account.<br/>You
     * can deposit funds from another blockchain address to a deposit address associated with
     * the virtual account, and the funds will be credited to that virtual account.</p>
     * <p><b>Scanning for incoming deposits</b><br/>
     * By default, deposit addresses are scanned for incoming deposits. Deposit addresses are
     * automatically synchronized with the associated virtual account, and you can see incoming
     * deposits on the virtual account.<br/>Scanning deposit addresses for incoming deposits
     * consumes <b>20 credits per address per day</b>.</p>
     * <p>If you want to be notified about certain events occurring on the deposit addresses,
     * <a
     * href="https://apidoc.tatum.io/tag/Notification-subscriptions#operation/createSubscription"
     * target="_blank">subscribe for notifications</a>.</p>
     *
     *
     * @summary Assign a blockchain address to a virtual account
     * @throws FetchError<400, types.AssignAddressResponse400> Bad Request
     * @throws FetchError<401, types.AssignAddressResponse401> Unauthorized. Not valid or inactive subscription key present in the HTTP Header.
     * @throws FetchError<403, types.AssignAddressResponse403> Forbidden. The request is authenticated, but it is not possible to required perform
     * operation due to logical error or invalid permissions.
     * @throws FetchError<500, types.AssignAddressResponse500> Internal server error. There was an error on the server during the processing of the
     * request.
     */
    SDK.prototype.assignAddress = function (metadata) {
        return this.core.fetch('/v3/offchain/account/{id}/address/{address}', 'post', metadata);
    };
    /**
     * <p><b>1 credit per API call</b></p>
     * <p>Remove a deposit address from the virtual account.</p>
     * <p>The deposit address will no longer be scanned for incoming deposits. You will no
     * longer be able to generate this address again.</p>
     *
     *
     * @summary Remove a deposit address from a virtual account
     * @throws FetchError<400, types.RemoveAddressResponse400> Bad Request
     * @throws FetchError<401, types.RemoveAddressResponse401> Unauthorized. Not valid or inactive subscription key present in the HTTP Header.
     * @throws FetchError<403, types.RemoveAddressResponse403> Forbidden. The request is authenticated, but it is not possible to required perform
     * operation due to logical error or invalid permissions.
     * @throws FetchError<500, types.RemoveAddressResponse500> Internal server error. There was an error on the server during the processing of the
     * request.
     */
    SDK.prototype.removeAddress = function (metadata) {
        return this.core.fetch('/v3/offchain/account/{id}/address/{address}', 'delete', metadata);
    };
    /**
     * <h4>2 credits per API call</h4>
     * <p>Create a withdrawal from Tatum Ledger account to the blockchain.</p>
     *   <h4>BTC, LTC, DOGE, BCH</h4>
     *   <p>
     *     When withdrawal from Tatum is executed, all deposits, which are not processed yet
     * are used as an input and
     *     change is moved to pool address 0 of wallet for defined account's xpub. If there are
     * no unspent deposits, only last pool address 0 UTXO is used.
     *     If balance of wallet is not sufficient, it is impossible to perform withdrawal from
     * this account -> funds were transferred to another
     *     linked wallet within system or outside of Tatum visibility.<br/>
     *     For the first time of withdrawal from wallet, there must be some deposit made and
     * funds are obtained from that. Since
     *     there is no withdrawal, there was no transfer to pool address 0 and thus it is not
     * present in vIn. Pool transfer is identified by missing data.address property in
     * response.
     *     When last not cancelled withdrawal is not completed and thus there is no tx id of
     * output transaction given,
     *     we cannot perform next withdrawal.
     *   </p>
     *   <h4>ETH</h4>
     *   <p>
     *     Withdrawal from Tatum can be processed only from 1 account. In Ethereum Blockchain,
     * each address is recognized as an account and only funds from that account can be sent in
     * 1 transaction.
     *     Example: Account A has 0.5 ETH, Account B has 0.3 ETH. Account A is linked to Tatum
     * Account 1, Account B is linked to Tatum Account 2. Tatum Account 1 has balance 0.7
     * Ethereum and
     *     Tatum Account 2 has 0.1 ETH. Withdrawal from Tatum Account 1 can be at most 0.5 ETH,
     * even though balance in Tatum Private Ledger is 0.7 ETH.
     *     Because of this Ethereum Blockchain limitation, withdrawal request should always
     * contain sourceAddress, from which withdrawal will be made. To get available balances for
     * Ethereum wallet accounts, use hint endpoint.
     *   </p>
     *   <h4>XRP</h4>
     *   <p>
     *     XRP withdrawal can contain DestinationTag except of address, which is placed in attr
     * parameter of withdrawal request.
     * SourceTag of the blockchain transaction should be withdrawal ID for autocomplete
     * purposes of withdrawals.
     *   </p>
     *   <h4>XLM</h4>
     *   <p>
     *     XLM withdrawal can contain memo except of address, which is placed in attr parameter
     * of withdrawal request. XLM blockchain does not have possibility to enter source account
     * information.
     *     It is possible to create memo in format 'destination|source', which is supported way
     * of memo in Tatum and also there is information about the sender account in the
     * blockchain.
     *   </p>
     * <p>
     * When withdrawal is created, all other withdrawals with the same currency are pending,
     * unless the current one is marked as complete or cancelled.</p>
     * <p>Tatum ledger transaction is created for every withdrawal request with operation type
     * WITHDRAWAL. The value of the transaction is the withdrawal amount + blockchain fee,
     * which should be paid.
     * In the situation, when there is withdrawal for ERC20, XLM, or XRP based custom assets,
     * the fee is not included in the transaction because it is paid in different assets than
     * the withdrawal itself.
     * </p>
     *
     *
     * @summary Store withdrawal
     * @throws FetchError<400, types.StoreWithdrawalResponse400> Bad Request
     * @throws FetchError<401, types.StoreWithdrawalResponse401> Unauthorized. Not valid or inactive subscription key present in the HTTP Header.
     * @throws FetchError<403, types.StoreWithdrawalResponse403> Forbidden. The request is authenticated, but it is not possible to required perform
     * operation due to logical error or invalid permissions.
     * @throws FetchError<500, types.StoreWithdrawalResponse500> Internal server error. There was an error on the server during the processing of the
     * request.
     */
    SDK.prototype.storeWithdrawal = function (body) {
        return this.core.fetch('/v3/offchain/withdrawal', 'post', body);
    };
    /**
     * <h4>1 credit per API call.</h4><br/><p>Get withdrawals.</p>
     *
     * @summary Get withdrawals
     * @throws FetchError<400, types.GetWithdrawalsResponse400> Bad Request
     * @throws FetchError<401, types.GetWithdrawalsResponse401> Unauthorized. Not valid or inactive subscription key present in the HTTP Header.
     * @throws FetchError<500, types.GetWithdrawalsResponse500> Internal server error. There was an error on the server during the processing of the
     * request.
     */
    SDK.prototype.getWithdrawals = function (metadata) {
        return this.core.fetch('/v3/offchain/withdrawal', 'get', metadata);
    };
    /**
     * <h4>2 credits per API call.</h4><br/>
     * <p>Invoke complete withdrawal as soon as blockchain transaction ID is available. All
     * other withdrawals for the same currency will be pending unless the last one is processed
     * and marked as completed.</p>
     *
     *
     * @summary Complete withdrawal
     * @throws FetchError<400, types.CompleteWithdrawalResponse400> Bad Request
     * @throws FetchError<401, types.CompleteWithdrawalResponse401> Unauthorized. Not valid or inactive subscription key present in the HTTP Header.
     * @throws FetchError<403, types.CompleteWithdrawalResponse403> Forbidden. The request is authenticated, but it is not possible to required perform
     * operation due to logical error or invalid permissions.
     * @throws FetchError<500, types.CompleteWithdrawalResponse500> Internal server error. There was an error on the server during the processing of the
     * request.
     */
    SDK.prototype.completeWithdrawal = function (metadata) {
        return this.core.fetch('/v3/offchain/withdrawal/{id}/{txId}', 'put', metadata);
    };
    /**
     * <h4>1 credit per API call.</h4><br/>
     * <p>This method is helpful if you need to cancel the withdrawal if the blockchain
     * transaction fails or is not yet processed.
     * This does not cancel already broadcast blockchain transaction, only Tatum internal
     * withdrawal, and the ledger transaction, that was linked to this withdrawal.<br/>
     * By default, the transaction fee is included in the reverted transaction. There are
     * situations, like sending ERC20 on ETH, TRC token on TRON, XLM or XRP based assets, when
     * the fee should not be reverted, because e.g. the fee is in calculated
     * in Ethereum and transaction was in ERC20 currency. In this situation, only the
     * transaction amount should be reverted, not the fee.
     * </p>
     *
     * <pre>
     *   Tip: For Virtual Accounts where withdrawal currency is a token, \n
     *   it is recommended to use “revert=false”. Otherwise, the blockchain \n
     *   transaction fee in native currency will be reverted as effective \n
     *   Virtual Account balance. Example: tx out fails and cancel \n
     *   “revert=true” from a 10 USDT + 0.10 TRX as “fee” would be \n
     *   reverted as 10+30 USDT (where the TRX of the fee is converted to USDT)
     * </pre>
     *
     *
     * @summary Cancel withdrawal
     * @throws FetchError<400, types.CancelInProgressWithdrawalResponse400> Bad Request
     * @throws FetchError<401, types.CancelInProgressWithdrawalResponse401> Unauthorized. Not valid or inactive subscription key present in the HTTP Header.
     * @throws FetchError<403, types.CancelInProgressWithdrawalResponse403> Forbidden. The request is authenticated, but it is not possible to required perform
     * operation due to logical error or invalid permissions.
     * @throws FetchError<500, types.CancelInProgressWithdrawalResponse500> Internal server error. There was an error on the server during the processing of the
     * request.
     */
    SDK.prototype.cancelInProgressWithdrawal = function (metadata) {
        return this.core.fetch('/v3/offchain/withdrawal/{id}', 'delete', metadata);
    };
    /**
     * <h4>2 credits per API call.</h4><br/>
     * <p>Broadcast signed raw transaction end complete withdrawal associated with it.
     * When broadcast succeeded but it is impossible to complete withdrawal, transaction id of
     * transaction is returned and withdrawal must be completed manually.
     * </p>
     *
     *
     * @summary Broadcast signed transaction and complete withdrawal
     * @throws FetchError<400, types.BroadcastBlockchainTransactionResponse400> Bad Request
     * @throws FetchError<401, types.BroadcastBlockchainTransactionResponse401> Unauthorized. Not valid or inactive subscription key present in the HTTP Header.
     * @throws FetchError<403, types.BroadcastBlockchainTransactionResponse403> Forbidden. The request is authenticated, but it is not possible to required perform
     * operation due to logical error or invalid permissions.
     * @throws FetchError<500, types.BroadcastBlockchainTransactionResponse500> Internal server error. There was an error on the server during the processing of the
     * request.
     */
    SDK.prototype.broadcastBlockchainTransaction = function (body) {
        return this.core.fetch('/v3/offchain/withdrawal/broadcast', 'post', body);
    };
    /**
     * <h4>2 credits per API call.</h4><br/>
     * <p>Send BTC (Bitcoin) from a virtual account to the blockchain. This will create Tatum
     * internal withdrawal request with ID. If every system works as expected, withdrawal
     * request is marked as complete and transaction id is assigned to it.
     * <ul>
     * <li>If Bitcoin server connection is unavailable, withdrawal request is cancelled.</li>
     * <li>If blockchain transfer is successful, but is it not possible to reach Tatum,
     * transaction id of blockchain transaction is returned and withdrawal request must be
     * completed manually, otherwise all other withdrawals will be pending.</li>
     * </ul>
     * There are two possibilites how the transaction on the blockchain can be created:
     * <ul>
     * <li>Using mnemonic - all of the addresses, that are generated from the mnemonic are
     * scanned for the incoming deposits
     * which are used as a source of the transaction. Assets, which are not used in a
     * transaction are moved to the system address wih the derivation index 0. Address with
     * index 0 cannot be assigned automatically to any account and is used for custodial wallet
     * use cases. For non-custodial wallets, field <b>attr</b> should be present and it should
     * be address with the index 1 of the connected wallet.</li>
     * <li>Using keyPair - addresses which are used as a source of the transaction are entered
     * manually</li>
     * </ul>
     * It is possible to perform ledger to blockchain transaction for ledger accounts without
     * blockchain address assigned to them.<br/>
     * This method is a helper method, which internally wraps these steps:
     * <ol>
     * <li><a href="https://apidoc.tatum.io/tag/Withdrawal#operation/storeWithdrawal">Store
     * withdrawal</a> - create a ledger transaction, which debits the assets on the sender
     * account.</li>
     * <li><a
     * href="https://apidoc.tatum.io/tag/Bitcoin#operation/BtcTransferBlockchain">Perform
     * blockchain transaction</a></li>
     * <li><a
     * href="https://apidoc.tatum.io/tag/Withdrawal#operation/completeWithdrawal">Complete
     * withdrawal</a> - move the withdrawal to the completed state, when all of the previous
     * steps were successful.</li>
     * </ol>
     * When some of the steps fails, <a
     * href="https://apidoc.tatum.io/tag/Withdrawal#operation/cancelInProgressWithdrawal">Cancel
     * withdrawal</a> operation is used, which cancels withdrawal and creates refund
     * transaction to the sender account.</li>
     * This operation needs the private key of the blockchain address. Every time the funds are
     * transferred, the transaction must be signed with the corresponding private key.
     * No one should ever send it's own private keys to the internet because there is a strong
     * possibility of stealing keys and losing funds. In this method, it is possible to enter
     * privateKey
     * or signatureId. PrivateKey should be used only for quick development on testnet versions
     * of blockchain when there is no risk of losing funds. In production,
     * <a href="https://github.com/tatumio/tatum-kms" target="_blank">Tatum KMS</a> should be
     * used for the highest security standards, and signatureId should be present in the
     * request.
     * Alternatively, using the Tatum client library for supported languages.</p>
     *
     *
     * @summary Send BTC from a virtual account to the blockchain
     * @throws FetchError<400, types.BtcTransferResponse400> Bad Request
     * @throws FetchError<401, types.BtcTransferResponse401> Unauthorized. Not valid or inactive subscription key present in the HTTP Header.
     * @throws FetchError<403, types.BtcTransferResponse403> Forbidden. The request is authenticated, but it is not possible to required perform
     * operation due to logical error or invalid permissions.
     * @throws FetchError<500, types.BtcTransferResponse500> Internal server error. There was an error on the server during the processing of the
     * request.
     */
    SDK.prototype.btcTransfer = function (body) {
        return this.core.fetch('/v3/offchain/bitcoin/transfer', 'post', body);
    };
    /**
     * <h4>10 credits per API call.</h4><br/>
     * <p>Send BCH (Bitcoin Cash) from a virtual account to the blockchain. This will create
     * Tatum internal withdrawal request with ID. If every system works as expected, withdrawal
     * request is marked as complete and transaction id is assigned to it.
     * <ul>
     * <li>If Bitcoin Cash server connection is unavailable, withdrawal request is
     * cancelled.</li>
     * <li>If blockchain transfer is successful, but is it not possible to reach Tatum,
     * transaction id of blockchain transaction is returned and withdrawal request must be
     * completed manually, otherwise all other withdrawals will be pending.</li>
     * </ul>
     * There are two possibilites how the transaction on the blockchain can be created:
     * <ul>
     * <li>Using mnemonic - all of the addresses, that are generated from the mnemonic are
     * scanned for the incoming deposits
     * which are used as a source of the transaction. Assets, which are not used in a
     * transaction are moved to the system address wih the derivation index 0. Address with
     * index 0 cannot be assigned automatically to any account and is used for custodial wallet
     * use cases. For non-custodial wallets, field <b>attr</b> should be present and it should
     * be address with the index 1 of the connected wallet.</li>
     * <li>Using keyPair - addresses which are used as a source of the transaction are entered
     * manually</li>
     * </ul>
     * It is possible to perform ledger to blockchain transaction for ledger accounts without
     * blockchain address assigned to them.<br/>
     * This method is a helper method, which internally wraps these steps:
     * <ol>
     * <li><a href="https://apidoc.tatum.io/tag/Withdrawal#operation/storeWithdrawal">Store
     * withdrawal</a> - create a ledger transaction, which debits the assets on the sender
     * account.</li>
     * <li><a
     * href="https://apidoc.tatum.io/tag/Bitcoin-Cash#operation/BchTransferBlockchain">Perform
     * blockchain transaction</a></li>
     * <li><a
     * href="https://apidoc.tatum.io/tag/Withdrawal#operation/completeWithdrawal">Complete
     * withdrawal</a> - move the withdrawal to the completed state, when all of the previous
     * steps were successful.</li>
     * </ol>
     * This operation needs the private key of the blockchain address. Every time the funds are
     * transferred, the transaction must be signed with the corresponding private key.
     * No one should ever send it's own private keys to the internet because there is a strong
     * possibility of stealing keys and losing funds. In this method, it is possible to enter
     * privateKey
     * or signatureId. PrivateKey should be used only for quick development on testnet versions
     * of blockchain when there is no risk of losing funds. In production,
     * <a href="https://github.com/tatumio/tatum-kms" target="_blank">Tatum KMS</a> should be
     * used for the highest security standards, and signatureId should be present in the
     * request.
     * Alternatively, using the Tatum client library for supported languages.</p>
     *
     *
     * @summary Send BCH from a virtual account to the blockchain
     * @throws FetchError<400, types.BchTransferResponse400> Bad Request
     * @throws FetchError<401, types.BchTransferResponse401> Unauthorized. Not valid or inactive subscription key present in the HTTP Header.
     * @throws FetchError<403, types.BchTransferResponse403> Forbidden. The request is authenticated, but it is not possible to required perform
     * operation due to logical error or invalid permissions.
     * @throws FetchError<500, types.BchTransferResponse500> Internal server error. There was an error on the server during the processing of the
     * request.
     */
    SDK.prototype.bchTransfer = function (body) {
        return this.core.fetch('/v3/offchain/bcash/transfer', 'post', body);
    };
    /**
     * <h4>10 credits per API call.</h4><br/>
     * <p>Send LTC (Litecoin) from a virtual account to the blockchain. This will create Tatum
     * internal withdrawal request with ID. If every system works as expected, withdrawal
     * request is marked as complete and transaction id is assigned to it.
     * <ul>
     * <li>If Litecoin server connection is unavailable, withdrawal request is cancelled.</li>
     * <li>If blockchain transfer is successful, but is it not possible to reach Tatum,
     * transaction id of blockchain transaction is returned and withdrawal request must be
     * completed manually, otherwise all other withdrawals will be pending.</li>
     * </ul>
     * There are two possibilites how the transaction on the blockchain can be created:
     * <ul>
     * <li>Using mnemonic - all of the addresses, that are generated from the mnemonic are
     * scanned for the incoming deposits
     * which are used as a source of the transaction. Assets, which are not used in a
     * transaction are moved to the system address wih the derivation index 0. Address with
     * index 0 cannot be assigned automatically to any account and is used for custodial wallet
     * use cases. For non-custodial wallets, field <b>attr</b> should be present and it should
     * be address with the index 1 of the connected wallet.</li>
     * <li>Using keyPair - addresses which are used as a source of the transaction are entered
     * manually</li>
     * </ul>
     * It is possible to perform ledger to blockchain transaction for ledger accounts without
     * blockchain address assigned to them.<br/>
     * This method is a helper method, which internally wraps these steps:
     * <ol>
     * <li><a href="https://apidoc.tatum.io/tag/Withdrawal#operation/storeWithdrawal">Store
     * withdrawal</a> - create a ledger transaction, which debits the assets on the sender
     * account.</li>
     * <li><a
     * href="https://apidoc.tatum.io/tag/Litecoin#operation/LtcTransferBlockchain">Perform
     * blockchain transaction</a></li>
     * <li><a
     * href="https://apidoc.tatum.io/tag/Withdrawal#operation/completeWithdrawal">Complete
     * withdrawal</a> - move the withdrawal to the completed state, when all of the previous
     * steps were successful.</li>
     * </ol>
     * This operation needs the private key of the blockchain address. Every time the funds are
     * transferred, the transaction must be signed with the corresponding private key.
     * No one should ever send it's own private keys to the internet because there is a strong
     * possibility of stealing keys and losing funds. In this method, it is possible to enter
     * privateKey
     * or signatureId. PrivateKey should be used only for quick development on testnet versions
     * of blockchain when there is no risk of losing funds. In production,
     * <a href="https://github.com/tatumio/tatum-kms" target="_blank">Tatum KMS</a> should be
     * used for the highest security standards, and signatureId should be present in the
     * request.
     * Alternatively, using the Tatum client library for supported languages.</p>
     *
     *
     * @summary Send LTC from a virtual account to the blockchain
     * @throws FetchError<400, types.LtcTransferResponse400> Bad Request
     * @throws FetchError<401, types.LtcTransferResponse401> Unauthorized. Not valid or inactive subscription key present in the HTTP Header.
     * @throws FetchError<403, types.LtcTransferResponse403> Forbidden. The request is authenticated, but it is not possible to required perform
     * operation due to logical error or invalid permissions.
     * @throws FetchError<500, types.LtcTransferResponse500> Internal server error. There was an error on the server during the processing of the
     * request.
     */
    SDK.prototype.ltcTransfer = function (body) {
        return this.core.fetch('/v3/offchain/litecoin/transfer', 'post', body);
    };
    /**
     * <h4>100 credits per API call. Tatum covers the fee connected to the transaction costs in
     * subscription credits. This operation can be done on mainnet only for paid
     * plans.</h4><br/>
     * <p>Send FLOW (Flow) or FUSD from a virtual account to the blockchain. This will create
     * Tatum internal withdrawal request with ID. If every system works as expected, withdrawal
     * request is marked as complete and transaction id is assigned to it.
     * <ul>
     * <li>If Flow server connection is unavailable, withdrawal request is cancelled.</li>
     * <li>If blockchain transfer is successful, but is it not possible to reach Tatum,
     * transaction id of blockchain transaction is returned and withdrawal request must be
     * completed manually, otherwise all other withdrawals will be pending.</li>
     * </ul>
     * There are two possibilites how the transaction on the blockchain can be created:
     * <ul>
     * <li>Using mnemonic and index - private key is generated based on the index in the
     * mnemonic.</li>
     * <li>Using secret - private keys is entered manually.</li>
     * </ul>
     * It is possible to perform ledger to blockchain transaction for ledger accounts without
     * blockchain address assigned to them.<br/>
     * This method is a helper method, which internally wraps these steps:
     * <ol>
     * <li><a href="https://apidoc.tatum.io/tag/Withdrawal#operation/storeWithdrawal">Store
     * withdrawal</a> - create a ledger transaction, which debits the assets on the sender
     * account.</li>
     * <li><a href="https://apidoc.tatum.io/tag/Flow#operation/FlowTransferBlockchain">Perform
     * blockchain transaction</a></li>
     * <li><a
     * href="https://apidoc.tatum.io/tag/Withdrawal#operation/completeWithdrawal">Complete
     * withdrawal</a> - move the withdrawal to the completed state, when all of the previous
     * steps were successful.</li>
     * </ol>
     * This operation needs the private key of the blockchain address. Every time the funds are
     * transferred, the transaction must be signed with the corresponding private key.
     * No one should ever send it's own private keys to the internet because there is a strong
     * possibility of stealing keys and losing funds. In this method, it is possible to enter
     * privateKey
     * or signatureId. PrivateKey should be used only for quick development on testnet versions
     * of blockchain when there is no risk of losing funds. In production,
     * <a href="https://github.com/tatumio/tatum-kms" target="_blank">Tatum KMS</a> should be
     * used for the highest security standards, and signatureId should be present in the
     * request.
     * Alternatively, using the Tatum client library for supported languages.</p>
     *
     *
     * @summary Send FLOW from a virtual account to the blockchain
     * @throws FetchError<400, types.FlowTransferResponse400> Bad Request
     * @throws FetchError<401, types.FlowTransferResponse401> Unauthorized. Not valid or inactive subscription key present in the HTTP Header.
     * @throws FetchError<403, types.FlowTransferResponse403> Forbidden. The request is authenticated, but it is not possible to required perform
     * operation due to logical error or invalid permissions.
     * @throws FetchError<500, types.FlowTransferResponse500> Internal server error. There was an error on the server during the processing of the
     * request.
     */
    SDK.prototype.flowTransfer = function (body) {
        return this.core.fetch('/v3/offchain/flow/transfer', 'post', body);
    };
    /**
     * <h4>4 credits per API call.</h4><br/>
     * <p>Send DOGE (Dogecoin) from a virtual account to the blockchain. This will create Tatum
     * internal withdrawal request with ID. If every system works as expected, withdrawal
     * request is marked as complete and transaction id is assigned to it.
     * <ul>
     * <li>If Dogecoin server connection is unavailable, withdrawal request is cancelled.</li>
     * <li>If blockchain transfer is successful, but is it not possible to reach Tatum,
     * transaction id of blockchain transaction is returned and withdrawal request must be
     * completed manually, otherwise all other withdrawals will be pending.</li>
     * </ul>
     * There are two possibilites how the transaction on the blockchain can be created:
     * <ul>
     * <li>Using mnemonic - all of the addresses, that are generated from the mnemonic are
     * scanned for the incoming deposits
     * which are used as a source of the transaction. Assets, which are not used in a
     * transaction are moved to the system address wih the derivation index 0. Address with
     * index 0 cannot be assigned automatically to any account and is used for custodial wallet
     * use cases. For non-custodial wallets, field <b>attr</b> should be present and it should
     * be address with the index 1 of the connected wallet.</li>
     * <li>Using keyPair - addresses which are used as a source of the transaction are entered
     * manually</li>
     * </ul>
     * It is possible to perform ledger to blockchain transaction for ledger accounts without
     * blockchain address assigned to them.<br/>
     * This method is a helper method, which internally wraps these steps:
     * <ol>
     * <li><a href="https://apidoc.tatum.io/tag/Withdrawal#operation/storeWithdrawal">Store
     * withdrawal</a> - create a ledger transaction, which debits the assets on the sender
     * account.</li>
     * <li><a
     * href="https://apidoc.tatum.io/tag/Dogecoin#operation/DogeTransferBlockchain">Perform
     * blockchain transaction</a></li>
     * <li><a
     * href="https://apidoc.tatum.io/tag/Withdrawal#operation/completeWithdrawal">Complete
     * withdrawal</a> - move the withdrawal to the completed state, when all of the previous
     * steps were successful.</li>
     * </ol>
     * This operation needs the private key of the blockchain address. Every time the funds are
     * transferred, the transaction must be signed with the corresponding private key.
     * No one should ever send it's own private keys to the internet because there is a strong
     * possibility of stealing keys and losing funds. In this method, it is possible to enter
     * privateKey
     * or signatureId. PrivateKey should be used only for quick development on testnet versions
     * of blockchain when there is no risk of losing funds. In production,
     * <a href="https://github.com/tatumio/tatum-kms" target="_blank">Tatum KMS</a> should be
     * used for the highest security standards, and signatureId should be present in the
     * request.
     * Alternatively, using the Tatum client library for supported languages.</p>
     *
     *
     * @summary Send DOGE from a virtual account to the blockchain
     * @throws FetchError<400, types.DogeTransferResponse400> Bad Request
     * @throws FetchError<401, types.DogeTransferResponse401> Unauthorized. Not valid or inactive subscription key present in the HTTP Header.
     * @throws FetchError<403, types.DogeTransferResponse403> Forbidden. The request is authenticated, but it is not possible to required perform
     * operation due to logical error or invalid permissions.
     * @throws FetchError<500, types.DogeTransferResponse500> Internal server error. There was an error on the server during the processing of the
     * request.
     */
    SDK.prototype.dogeTransfer = function (body) {
        return this.core.fetch('/v3/offchain/dogecoin/transfer', 'post', body);
    };
    /**
     * <h4>4 credits per API call.</h4><br/>
     * <p>Send ETH (Ethereum) from a virtual account to the blockchain. This will create Tatum
     * internal withdrawal request with ID. If every system works as expected, withdrawal
     * request is marked as complete and transaction id is assigned to it.
     * <ul>
     * <li>If Ethereum server connection is unavailable, withdrawal request is cancelled.</li>
     * <li>If blockchain transfer is successful, but is it not possible to reach Tatum,
     * transaction id of blockchain transaction is returned and withdrawal request must be
     * completed manually, otherwise all other withdrawals will be pending.</li>
     * </ul>
     * It is possible to perform ledger to blockchain transaction for ledger accounts without
     * blockchain address assigned to them.<br/>
     * This operation needs the private key of the blockchain address. Every time the funds are
     * transferred, the transaction must be signed with the corresponding private key.
     * No one should ever send it's own private keys to the internet because there is a strong
     * possibility of stealing keys and losing funds. In this method, it is possible to enter
     * privateKey
     * or signatureId. PrivateKey should be used only for quick development on testnet versions
     * of blockchain when there is no risk of losing funds. In production,
     * <a href="https://github.com/tatumio/tatum-kms" target="_blank">Tatum KMS</a> should be
     * used for the highest security standards, and signatureId should be present in the
     * request.
     * Alternatively, using the Tatum client library for supported languages.
     * </p>
     *
     *
     * @summary Send ETH from a virtual account to the blockchain
     * @throws FetchError<400, types.EthTransferResponse400> Bad Request
     * @throws FetchError<401, types.EthTransferResponse401> Unauthorized. Not valid or inactive subscription key present in the HTTP Header.
     * @throws FetchError<403, types.EthTransferResponse403> Forbidden. The request is authenticated, but it is not possible to required perform
     * operation due to logical error or invalid permissions.
     * @throws FetchError<500, types.EthTransferResponse500> Internal server error. There was an error on the server during the processing of the
     * request.
     */
    SDK.prototype.ethTransfer = function (body) {
        return this.core.fetch('/v3/offchain/ethereum/transfer', 'post', body);
    };
    /**
     * <h4>4 credits per API call.</h4><br/>
     * <p>Send MATIC (Polygon) or ERC-20-equivalent Polygon tokens from a virtual account to
     * the blockchain. This will create Tatum internal withdrawal request with ID. If every
     * system works as expected, withdrawal request is marked as complete and transaction id is
     * assigned to it.
     * <ul>
     * <li>If Polygon server connection is unavailable, withdrawal request is cancelled.</li>
     * <li>If blockchain transfer is successful, but is it not possible to reach Tatum,
     * transaction id of blockchain transaction is returned and withdrawal request must be
     * completed manually, otherwise all other withdrawals will be pending.</li>
     * </ul>
     * It is possible to perform ledger to blockchain transaction for ledger accounts without
     * blockchain address assigned to them.<br/>
     * This operation needs the private key of the blockchain address. Every time the funds are
     * transferred, the transaction must be signed with the corresponding private key.
     * No one should ever send it's own private keys to the internet because there is a strong
     * possibility of stealing keys and losing funds. In this method, it is possible to enter
     * privateKey
     * or signatureId. PrivateKey should be used only for quick development on testnet versions
     * of blockchain when there is no risk of losing funds. In production,
     * <a href="https://github.com/tatumio/tatum-kms" target="_blank">Tatum KMS</a> should be
     * used for the highest security standards, and signatureId should be present in the
     * request.
     * Alternatively, using the Tatum client library for supported languages.
     * </p>
     *
     *
     * @summary Send MATIC from a virtual account to the blockchain
     * @throws FetchError<400, types.PolygonTransferResponse400> Bad Request
     * @throws FetchError<401, types.PolygonTransferResponse401> Unauthorized. Not valid or inactive subscription key present in the HTTP Header.
     * @throws FetchError<403, types.PolygonTransferResponse403> Forbidden. The request is authenticated, but it is not possible to required perform
     * operation due to logical error or invalid permissions.
     * @throws FetchError<500, types.PolygonTransferResponse500> Internal server error. There was an error on the server during the processing of the
     * request.
     */
    SDK.prototype.polygonTransfer = function (body) {
        return this.core.fetch('/v3/offchain/polygon/transfer', 'post', body);
    };
    /**
     * <h4>4 credits per API call.</h4><br/>
     * <p>Send KCS (KuCoin Community Chain (KCC)) or ERC-20-equivalent KCC tokens from a
     * virtual account to the blockchain. This will create Tatum internal withdrawal request
     * with ID. If every system works as expected, withdrawal request is marked as complete and
     * transaction id is assigned to it.
     * <ul>
     * <li>If KCS server connection is unavailable, withdrawal request is cancelled.</li>
     * <li>If blockchain transfer is successful, but is it not possible to reach Tatum,
     * transaction id of blockchain transaction is returned and withdrawal request must be
     * completed manually, otherwise all other withdrawals will be pending.</li>
     * </ul>
     * It is possible to perform ledger to blockchain transaction for ledger accounts without
     * blockchain address assigned to them.<br/>
     * This operation needs the private key of the blockchain address. Every time the funds are
     * transferred, the transaction must be signed with the corresponding private key.
     * No one should ever send it's own private keys to the internet because there is a strong
     * possibility of stealing keys and losing funds. In this method, it is possible to enter
     * privateKey
     * or signatureId. PrivateKey should be used only for quick development on testnet versions
     * of blockchain when there is no risk of losing funds. In production,
     * <a href="https://github.com/tatumio/tatum-kms" target="_blank">Tatum KMS</a> should be
     * used for the highest security standards, and signatureId should be present in the
     * request.
     * Alternatively, using the Tatum client library for supported languages.
     * </p>
     *
     *
     * @summary Send KCS from a virtual account to the blockchain
     * @throws FetchError<400, types.KcsTransferResponse400> Bad Request
     * @throws FetchError<401, types.KcsTransferResponse401> Unauthorized. Not valid or inactive subscription key present in the HTTP Header.
     * @throws FetchError<403, types.KcsTransferResponse403> Forbidden. The request is authenticated, but it is not possible to required perform
     * operation due to logical error or invalid permissions.
     * @throws FetchError<500, types.KcsTransferResponse500> Internal server error. There was an error on the server during the processing of the
     * request.
     */
    SDK.prototype.kcsTransfer = function (body) {
        return this.core.fetch('/v3/offchain/kcs/transfer', 'post', body);
    };
    /**
     * <h4>4 credits per API call.</h4><br/>
     * <p>Send Ethereum ERC-20 tokens from a virtual account to the blockchain. This will
     * create Tatum internal withdrawal request with ID. If every system works as expected,
     * withdrawal request is marked as complete and transaction id is assigned to it.
     * <ul>
     * <li>If Ethereum server connection is unavailable, withdrawal request is cancelled.</li>
     * <li>If blockchain transfer is successful, but is it not possible to reach Tatum,
     * transaction id of blockchain transaction is returned and withdrawal request must be
     * completed manually, otherwise all other withdrawals will be pending.</li>
     * </ul>
     * It is possible to perform ledger to blockchain transaction for ledger accounts without
     * blockchain address assigned to them.<br/>
     * This operation needs the private key of the blockchain address. Every time the funds are
     * transferred, the transaction must be signed with the corresponding private key.
     * No one should ever send it's own private keys to the internet because there is a strong
     * possibility of stealing keys and losing funds. In this method, it is possible to enter
     * privateKey
     * or signatureId. PrivateKey should be used only for quick development on testnet versions
     * of blockchain when there is no risk of losing funds. In production,
     * <a href="https://github.com/tatumio/tatum-kms" target="_blank">Tatum KMS</a> should be
     * used for the highest security standards, and signatureId should be present in the
     * request.
     * Alternatively, using the Tatum client library for supported languages.
     * </p>
     *
     *
     * @summary Send Ethereum ERC-20 tokens from a virtual account to the blockchain
     * @throws FetchError<400, types.EthTransferErc20Response400> Bad Request
     * @throws FetchError<401, types.EthTransferErc20Response401> Unauthorized. Not valid or inactive subscription key present in the HTTP Header.
     * @throws FetchError<403, types.EthTransferErc20Response403> Forbidden. The request is authenticated, but it is not possible to required perform
     * operation due to logical error or invalid permissions.
     * @throws FetchError<500, types.EthTransferErc20Response500> Internal server error. There was an error on the server during the processing of the
     * request.
     */
    SDK.prototype.ethTransferErc20 = function (body) {
        return this.core.fetch('/v3/offchain/ethereum/erc20/transfer', 'post', body);
    };
    /**
     * <p><b>This method is deprecated.<br/>Use <a href="#operation/registerErc20Token">this
     * method</a> instead.</b></p><br/>
     * <h4>2 credits per API call.</h4>
     * <p>First step to create new ERC20 token with given supply on Ethereum blockchain with
     * support of Tatum's private ledger.<br/>
     * This method only creates Tatum Private ledger virtual currency with predefined
     * parameters. It will not generate any blockchain smart contract.<br/>
     * The whole supply of ERC20 token is stored in the customer's newly created account. Then
     * it is possible to create new Tatum accounts with ERC20 token name as account's
     * currency.<br/>
     * Newly created account is frozen until the specific ERC20 smart contract address is
     * linked with the Tatum virtual currency, representing the token.<br/>
     * Order of the steps to create ERC20 smart contract with Tatum private ledger support:
     * <ol>
     * <li><a href="#operation/registerErc20Token">Create ERC20 token</a> - creates a virtual
     * currency within Tatum</li>
     * <li><a href="#operation/EthDeployErc20Blockchain">Deploy ERC20 smart contract</a> -
     * create new ERC20 smart contract on the blockchain</li>
     * <li><a href="#operation/storeTokenAddress">Store ERC20 smart contract address</a> - link
     * newly created ERC20 smart contract address with Tatum virtual currency - this operation
     * enables frozen account and enables ledger synchronization for ERC20 Tatum accounts</li>
     * </ol>
     * There is a helper method <a href="#operation/EthDeployErc20">Deploy Ethereum ERC20 Smart
     * Contract to Blockchain and Ledger</a>, which wraps first 2 steps into 1 method.<br/>
     * Address on the blockchain, where all initial supply will be transferred, can be defined
     * via the address or xpub and derivationIndex. When xpub is present, the account connected
     * to this virtualCurrency will be set as the account's xpub.
     * </p>
     *
     *
     * @summary Register a new Ethereum ERC-20 token in the virtual account
     * @throws FetchError<400, types.CreateErc20Response400> Bad Request
     * @throws FetchError<401, types.CreateErc20Response401> Unauthorized. Not valid or inactive subscription key present in the HTTP Header.
     * @throws FetchError<403, types.CreateErc20Response403> Forbidden. The request is authenticated, but it is not possible to required perform
     * operation due to logical error or invalid permissions.
     * @throws FetchError<500, types.CreateErc20Response500> Internal server error. There was an error on the server during the processing of the
     * request.
     */
    SDK.prototype.createErc20 = function (body) {
        return this.core.fetch('/v3/offchain/ethereum/erc20', 'post', body);
    };
    /**
     * <p><b>4 credits per API call</b></p>
     * <p>Deploy an Ethereum ERC-20 smart contract. This is a helper method, which is
     * combination of
     * <a href="#operation/registerErc20Token">Register new ERC20 token in the ledger</a> and
     * <a
     * href="https://apidoc.tatum.io/tag/Fungible-Tokens-(ERC-20-or-compatible)#operation/Erc20Deploy">Deploy
     * blockchain ERC20</a>.</p>
     * <p>After deploying a contract to blockchain, the contract address will become available
     * and must be stored within Tatum. Otherwise, it will not be possible to interact with it
     * and starts automatic blockchain synchronization.</p>
     * <p><b>Signing a transaction</b><br/>
     * When deploying an Ethereum ERC-20 smart contract to the blockchain and a virtual
     * account, you are charged a fee for the transaction, and you must sign the transaction
     * with the private key of the blockchain address from which the fee will be deducted.</p>
     * <p>Providing the private key in the API is not a secure way of signing transactions,
     * because the private key can be stolen or exposed. Your private keys should never leave
     * your security perimeter. You should use the private keys only for testing a solution you
     * are building on the <b>testnet</b> of a blockchain.</p>
     * <p>For signing transactions on the <b>mainnet</b>, we strongly recommend that you use
     * the Tatum <a href="https://github.com/tatumio/tatum-kms" target="_blank">Key Management
     * System (KMS)</a> and provide the signature ID instead of the private key in the API.
     * Alternatively, you can use the <a href="https://github.com/tatumio/tatum-js/tree/v2"
     * target="_blank">Tatum JavaScript client</a>.</p>
     *
     *
     * @summary Deploy an Ethereum ERC-20 smart contract to the blockchain and a virtual account
     * @throws FetchError<400, types.EthDeployErc20Response400> Bad Request
     * @throws FetchError<401, types.EthDeployErc20Response401> Unauthorized. Not valid or inactive subscription key present in the HTTP Header.
     * @throws FetchError<403, types.EthDeployErc20Response403> Forbidden. The request is authenticated, but it is not possible to required perform
     * operation due to logical error or invalid permissions.
     * @throws FetchError<500, types.EthDeployErc20Response500> Internal server error. There was an error on the server during the processing of the
     * request.
     */
    SDK.prototype.ethDeployErc20 = function (body) {
        return this.core.fetch('/v3/offchain/ethereum/erc20/deploy', 'post', body);
    };
    /**
     * <h4>4 credits per API call.</h4><br/>
     * <p>Send BSC (BNB Smart Chain) or BEP-20 tokens from a virtual account to the blockchain.
     * This will create Tatum internal withdrawal request with ID. If every system works as
     * expected, withdrawal request is marked as complete and transaction id is assigned to it.
     * <br/>
     * <br/>
     * <ul>
     * <li>If BSC server connection is unavailable, withdrawal request is cancelled.</li>
     * <li>If blockchain transfer is successful, but is it not possible to reach Tatum,
     * transaction id of blockchain transaction is returned and withdrawal request must be
     * completed manually, otherwise all other withdrawals will be pending.</li>
     * </ul>
     * It is possible to perform ledger to blockchain transaction for ledger accounts without
     * blockchain address assigned to them.<br/>
     * This operation needs the private key of the blockchain address. Every time the funds are
     * transferred, the transaction must be signed with the corresponding private key.
     * No one should ever send it's own private keys to the internet because there is a strong
     * possibility of stealing keys and losing funds. In this method, it is possible to enter
     * privateKey
     * or signatureId. PrivateKey should be used only for quick development on testnet versions
     * of blockchain when there is no risk of losing funds. In production,
     * <a href="https://github.com/tatumio/tatum-kms" target="_blank">Tatum KMS</a> should be
     * used for the highest security standards, and signatureId should be present in the
     * request.
     * Alternatively, using the Tatum client library for supported languages.
     * </p>
     *
     *
     * @summary Send BSC from a virtual account to the blockchain
     * @throws FetchError<400, types.BscOrBepTransferResponse400> Bad Request
     * @throws FetchError<401, types.BscOrBepTransferResponse401> Unauthorized. Not valid or inactive subscription key present in the HTTP Header.
     * @throws FetchError<403, types.BscOrBepTransferResponse403> Forbidden. The request is authenticated, but it is not possible to required perform
     * operation due to logical error or invalid permissions.
     * @throws FetchError<500, types.BscOrBepTransferResponse500> Internal server error. There was an error on the server during the processing of the
     * request.
     */
    SDK.prototype.bscOrBepTransfer = function (body) {
        return this.core.fetch('/v3/offchain/bsc/transfer', 'post', body);
    };
    /**
     * <p><b>This method is deprecated.<br/>Use <a href="#operation/registerErc20Token">this
     * method</a> instead.</b></p><br/>
     * <h4>2 credits per API call.</h4>
     * <p>First step to create new BEP20 token with given supply on BSC blockchain with support
     * of Tatum's private ledger.<br/>
     * <br/>
     * <br/>
     * This method only creates Tatum Private ledger virtual currency with predefined
     * parameters. It will not generate any blockchain smart contract.<br/>
     * The whole supply of BEP20 token is stored in the customer's newly created account. Then
     * it is possible to create new Tatum accounts with BEP20 token name as account's
     * currency.<br/>
     * Newly created account is frozen until the specific BEP20 smart contract address is
     * linked with the Tatum virtual currency, representing the token.<br/>
     * Order of the steps to create BEP20 smart contract with Tatum private ledger support:
     * <ol>
     * <li><a href="#operation/registerErc20Token">Register BEP20 token</a> - creates a virtual
     * currency within Tatum</li>
     * <li><a href="#operation/BscDeployErc20Blockchain">Deploy BEP20 smart contract</a> -
     * create new BEP20 smart contract on the blockchain</li>
     * <li><a href="#operation/storeTokenAddress">Store BEP20 smart contract address</a> - link
     * newly created BEP20 smart contract address with Tatum virtual currency - this operation
     * enables frozen account and enables ledger synchronization for BEP20 Tatum accounts</li>
     * </ol>
     * There is a helper method <a href="#operation/EthDeployErc20">Deploy BSC BEP20 Smart
     * Contract to Blockchain and Ledger</a>, which wraps first 2 steps into 1 method.<br/>
     * Address on the blockchain, where all initial supply will be transferred, can be defined
     * via the address or xpub and derivationIndex. When xpub is present, the account connected
     * to this virtualCurrency will be set as the account's xpub.
     * </p>
     *
     *
     * @summary Register a new BNB Smart Chain BEP-20 token in the virtual account
     * @throws FetchError<400, types.CreateBep20Response400> Bad Request
     * @throws FetchError<401, types.CreateBep20Response401> Unauthorized. Not valid or inactive subscription key present in the HTTP Header.
     * @throws FetchError<403, types.CreateBep20Response403> Forbidden. The request is authenticated, but it is not possible to required perform
     * operation due to logical error or invalid permissions.
     * @throws FetchError<500, types.CreateBep20Response500> Internal server error. There was an error on the server during the processing of the
     * request.
     */
    SDK.prototype.createBep20 = function (body) {
        return this.core.fetch('/v3/offchain/bsc/bep20', 'post', body);
    };
    /**
     * <p><b>4 credits per API call</b></p>
     * <p>Deploy a BNB Smart Chain BEP-20 smart contract. This is a helper method, which is
     * combination of
     * <a href="#operation/registerErc20Token">Register new BEP20 token in the ledger</a> and
     * <a
     * href="https://apidoc.tatum.io/tag/Fungible-Tokens-(ERC-20-or-compatible)#operation/Erc20Deploy">Deploy
     * blockchain ERC20</a>.</p>
     * <p>After deploying a contract to blockchain, the contract address will become available
     * and must be stored within Tatum. Otherwise, it will not be possible to interact with it
     * and starts automatic blockchain synchronization.</p>
     * <p><b>Signing a transaction</b><br/>
     * When deploying a BNB Smart Chain BEP-20 smart contract to the blockchain and a virtual
     * account, you are charged a fee for the transaction, and you must sign the transaction
     * with the private key of the blockchain address from which the fee will be deducted.</p>
     * <p>Providing the private key in the API is not a secure way of signing transactions,
     * because the private key can be stolen or exposed. Your private keys should never leave
     * your security perimeter. You should use the private keys only for testing a solution you
     * are building on the <b>testnet</b> of a blockchain.</p>
     * <p>For signing transactions on the <b>mainnet</b>, we strongly recommend that you use
     * the Tatum <a href="https://github.com/tatumio/tatum-kms" target="_blank">Key Management
     * System (KMS)</a> and provide the signature ID instead of the private key in the API.
     * Alternatively, you can use the <a href="https://github.com/tatumio/tatum-js/tree/v2"
     * target="_blank">Tatum JavaScript client</a>.</p>
     *
     *
     * @summary Deploy a BNB Smart Chain BEP-20 smart contract to the blockchain and a virtual account
     * @throws FetchError<400, types.BscDeployBep20Response400> Bad Request
     * @throws FetchError<401, types.BscDeployBep20Response401> Unauthorized. Not valid or inactive subscription key present in the HTTP Header.
     * @throws FetchError<403, types.BscDeployBep20Response403> Forbidden. The request is authenticated, but it is not possible to required perform
     * operation due to logical error or invalid permissions.
     * @throws FetchError<500, types.BscDeployBep20Response500> Internal server error. There was an error on the server during the processing of the
     * request.
     */
    SDK.prototype.bscDeployBep20 = function (body) {
        return this.core.fetch('/v3/offchain/bsc/bep20/deploy', 'post', body);
    };
    /**
     * <h4>4 credits per API call.</h4><br/>
     * <p>Send KLAY or ERC-20-equivalent tokens from a virtual account to the blockchain. This
     * will create Tatum internal withdrawal request with ID. If every system works as
     * expected, withdrawal request is marked as complete and transaction id is assigned to it.
     * <br/>
     * <br/>
     * <ul>
     * <li>If KLAY server connection is unavailable, withdrawal request is cancelled.</li>
     * <li>If blockchain transfer is successful, but is it not possible to reach Tatum,
     * transaction id of blockchain transaction is returned and withdrawal request must be
     * completed manually, otherwise all other withdrawals will be pending.</li>
     * </ul>
     * It is possible to perform ledger to blockchain transaction for ledger accounts without
     * blockchain address assigned to them.<br/>
     * This operation needs the private key of the blockchain address. Every time the funds are
     * transferred, the transaction must be signed with the corresponding private key.
     * No one should ever send it's own private keys to the internet because there is a strong
     * possibility of stealing keys and losing funds. In this method, it is possible to enter
     * privateKey
     * or signatureId. PrivateKey should be used only for quick development on testnet versions
     * of blockchain when there is no risk of losing funds. In production,
     * <a href="https://github.com/tatumio/tatum-kms" target="_blank">Tatum KMS</a> should be
     * used for the highest security standards, and signatureId should be present in the
     * request.
     * Alternatively, using the Tatum client library for supported languages.
     * </p>
     *
     *
     * @summary Send KLAY from a virtual account to the blockchain
     * @throws FetchError<400, types.KlayTransferResponse400> Bad Request
     * @throws FetchError<401, types.KlayTransferResponse401> Unauthorized. Not valid or inactive subscription key present in the HTTP Header.
     * @throws FetchError<403, types.KlayTransferResponse403> Forbidden. The request is authenticated, but it is not possible to required perform
     * operation due to logical error or invalid permissions.
     * @throws FetchError<500, types.KlayTransferResponse500> Internal server error. There was an error on the server during the processing of the
     * request.
     */
    SDK.prototype.klayTransfer = function (body) {
        return this.core.fetch('/v3/offchain/klaytn/transfer', 'post', body);
    };
    /**
     * <p><b>4 credits per API call</b></p>
     * <p>Deploy a Klaytn ERC-20-equivalent smart contract. This is a helper method, which is
     * combination of
     * <a href="#operation/registerErc20Token">Register new ERC20 token in the ledger</a> and
     * <a
     * href="https://apidoc.tatum.io/tag/Fungible-Tokens-(ERC-20-or-compatible)#operation/Erc20Deploy">Deploy
     * blockchain ERC20</a>.</p>
     * <p>After deploying a contract to blockchain, the contract address will become available
     * and must be stored within Tatum. Otherwise, it will not be possible to interact with it
     * and starts automatic blockchain synchronization.</p>
     * <p><b>Signing a transaction</b><br/>
     * When deploying a Klaytn ERC-20-equivalent smart contract to the blockchain and a virtual
     * account, you are charged a fee for the transaction, and you must sign the transaction
     * with the private key of the blockchain address from which the fee will be deducted.</p>
     * <p>Providing the private key in the API is not a secure way of signing transactions,
     * because the private key can be stolen or exposed. Your private keys should never leave
     * your security perimeter. You should use the private keys only for testing a solution you
     * are building on the <b>testnet</b> of a blockchain.</p>
     * <p>For signing transactions on the <b>mainnet</b>, we strongly recommend that you use
     * the Tatum <a href="https://github.com/tatumio/tatum-kms" target="_blank">Key Management
     * System (KMS)</a> and provide the signature ID instead of the private key in the API.
     * Alternatively, you can use the <a href="https://github.com/tatumio/tatum-js/tree/v2"
     * target="_blank">Tatum JavaScript client</a>.</p>
     *
     *
     * @summary Deploy a Klaytn ERC-20-equivalent smart contract to the blockchain and a virtual account
     * @throws FetchError<400, types.KlayDeployErc20Response400> Bad Request
     * @throws FetchError<401, types.KlayDeployErc20Response401> Unauthorized. Not valid or inactive subscription key present in the HTTP Header.
     * @throws FetchError<403, types.KlayDeployErc20Response403> Forbidden. The request is authenticated, but it is not possible to required perform
     * operation due to logical error or invalid permissions.
     * @throws FetchError<500, types.KlayDeployErc20Response500> Internal server error. There was an error on the server during the processing of the
     * request.
     */
    SDK.prototype.klayDeployErc20 = function (body) {
        return this.core.fetch('/v3/offchain/klaytn/erc20/deploy', 'post', body);
    };
    /**
     * <h4>4 credits per API call.</h4><br/>
     * <p>Send XDC (XinFin) or ERC-20-equivalent XinFin tokens from a virtual account to the
     * blockchain. This will create Tatum internal withdrawal request with ID. If every system
     * works as expected, withdrawal request is marked as complete and transaction id is
     * assigned to it.
     * <br/>
     * <br/>
     * <ul>
     * <li>If XDC server connection is unavailable, withdrawal request is cancelled.</li>
     * <li>If blockchain transfer is successful, but is it not possible to reach Tatum,
     * transaction id of blockchain transaction is returned and withdrawal request must be
     * completed manually, otherwise all other withdrawals will be pending.</li>
     * </ul>
     * It is possible to perform ledger to blockchain transaction for ledger accounts without
     * blockchain address assigned to them.<br/>
     * This operation needs the private key of the blockchain address. Every time the funds are
     * transferred, the transaction must be signed with the corresponding private key.
     * No one should ever send it's own private keys to the internet because there is a strong
     * possibility of stealing keys and losing funds. In this method, it is possible to enter
     * privateKey
     * or signatureId. PrivateKey should be used only for quick development on testnet versions
     * of blockchain when there is no risk of losing funds. In production,
     * <a href="https://github.com/tatumio/tatum-kms" target="_blank">Tatum KMS</a> should be
     * used for the highest security standards, and signatureId should be present in the
     * request.
     * Alternatively, using the Tatum client library for supported languages.
     * </p>
     *
     *
     * @summary Send XDC from a virtual account to the blockchain
     * @throws FetchError<400, types.XdcTransferResponse400> Bad Request
     * @throws FetchError<401, types.XdcTransferResponse401> Unauthorized. Not valid or inactive subscription key present in the HTTP Header.
     * @throws FetchError<403, types.XdcTransferResponse403> Forbidden. The request is authenticated, but it is not possible to required perform
     * operation due to logical error or invalid permissions.
     * @throws FetchError<500, types.XdcTransferResponse500> Internal server error. There was an error on the server during the processing of the
     * request.
     */
    SDK.prototype.xdcTransfer = function (body) {
        return this.core.fetch('/v3/offchain/xdc/transfer', 'post', body);
    };
    /**
     * <p><b>This method is deprecated.<br/>Use <a href="#operation/registerErc20Token">this
     * method</a> instead.</b></p><br/>
     * <h4>2 credits per API call.</h4>
     * <p>First step to create new ERC20 token with given supply on XDC blockchain with support
     * of Tatum's private ledger.<br/>
     * This method only creates Tatum Private ledger virtual currency with predefined
     * parameters. It will not generate any blockchain smart contract.<br/>
     * The whole supply of ERC20 token is stored in the customer's newly created account. Then
     * it is possible to create new Tatum accounts with ERC20 token name as account's
     * currency.<br/>
     * Newly created account is frozen until the specific ERC20 smart contract address is
     * linked with the Tatum virtual currency, representing the token.<br/>
     * Order of the steps to create ERC20 smart contract with Tatum private ledger support:
     * <ol>
     * <li><a href="#operation/registerErc20Token">Register ERC20 token</a> - creates a virtual
     * currency within Tatum</li>
     * <li><a href="#operation/Erc20Deploy">Deploy ERC20 smart contract</a> - create new ERC20
     * smart contract on the blockchain</li>
     * <li><a href="#operation/storeTokenAddress">Store ERC20 smart contract address</a> - link
     * newly created ERC20 smart contract address with Tatum virtual currency - this operation
     * enables frozen account and enables ledger synchronization for ERC20 Tatum accounts</li>
     * </ol>
     * There is a helper method <a href="#operation/Erc20Deploy">Deploy XDC ERC20 Smart
     * Contract to Blockchain and Ledger</a>, which wraps first 2 steps into 1 method.<br/>
     * Address on the blockchain, where all initial supply will be transferred, can be defined
     * via the address or xpub and derivationIndex. When xpub is present, the account connected
     * to this virtualCurrency will be set as the account's xpub.
     * </p>
     *
     *
     * @summary Register a new XinFin ERC-20-equivalent token in the virtual account
     * @throws FetchError<400, types.CreateXdc20Response400> Bad Request
     * @throws FetchError<401, types.CreateXdc20Response401> Unauthorized. Not valid or inactive subscription key present in the HTTP Header.
     * @throws FetchError<403, types.CreateXdc20Response403> Forbidden. The request is authenticated, but it is not possible to required perform
     * operation due to logical error or invalid permissions.
     * @throws FetchError<500, types.CreateXdc20Response500> Internal server error. There was an error on the server during the processing of the
     * request.
     */
    SDK.prototype.createXdc20 = function (body) {
        return this.core.fetch('/v3/offchain/xdc/erc20', 'post', body);
    };
    /**
     * <p><b>4 credits per API call</b></p>
     * <p>Deploy a XinFin ERC-20-equivalent smart contract. This is a helper method, which is
     * combination of
     * <a href="#operation/registerErc20Token">Register new ERC20 token in the ledger</a> and
     * <a
     * href="https://apidoc.tatum.io/tag/Fungible-Tokens-(ERC-20-or-compatible)#operation/Erc20Deploy">Deploy
     * blockchain ERC20</a>.</p>
     * <p>After deploying a contract to blockchain, the contract address will become available
     * and must be stored within Tatum. Otherwise, it will not be possible to interact with it
     * and starts automatic blockchain synchronization.</p>
     * <p><b>Signing a transaction</b><br/>
     * When deploying a XinFin ERC-20-equivalent smart contract to the blockchain and a virtual
     * account, you are charged a fee for the transaction, and you must sign the transaction
     * with the private key of the blockchain address from which the fee will be deducted.</p>
     * <p>Providing the private key in the API is not a secure way of signing transactions,
     * because the private key can be stolen or exposed. Your private keys should never leave
     * your security perimeter. You should use the private keys only for testing a solution you
     * are building on the <b>testnet</b> of a blockchain.</p>
     * <p>For signing transactions on the <b>mainnet</b>, we strongly recommend that you use
     * the Tatum <a href="https://github.com/tatumio/tatum-kms" target="_blank">Key Management
     * System (KMS)</a> and provide the signature ID instead of the private key in the API.
     * Alternatively, you can use the <a href="https://github.com/tatumio/tatum-js/tree/v2"
     * target="_blank">Tatum JavaScript client</a>.</p>
     *
     *
     * @summary Deploy a XinFin ERC-20-equivalent smart contract to the blockchain and a virtual account
     * @throws FetchError<400, types.XdcDeployErc20Response400> Bad Request
     * @throws FetchError<401, types.XdcDeployErc20Response401> Unauthorized. Not valid or inactive subscription key present in the HTTP Header.
     * @throws FetchError<403, types.XdcDeployErc20Response403> Forbidden. The request is authenticated, but it is not possible to required perform
     * operation due to logical error or invalid permissions.
     * @throws FetchError<500, types.XdcDeployErc20Response500> Internal server error. There was an error on the server during the processing of the
     * request.
     */
    SDK.prototype.xdcDeployErc20 = function (body) {
        return this.core.fetch('/v3/offchain/xdc/erc20/deploy', 'post', body);
    };
    /**
     * <h4>4 credits per API call.</h4><br/>
     * <p>Send ONE (Harmony) or HRM-20 tokens from a virtual account to the blockchain. This
     * will create Tatum internal withdrawal request with ID. If every system works as
     * expected, withdrawal request is marked as complete and transaction id is assigned to it.
     * <br/>
     * <br/>
     * <ul>
     * <li>If ONE server connection is unavailable, withdrawal request is cancelled.</li>
     * <li>If blockchain transfer is successful, but is it not possible to reach Tatum,
     * transaction id of blockchain transaction is returned and withdrawal request must be
     * completed manually, otherwise all other withdrawals will be pending.</li>
     * </ul>
     * It is possible to perform ledger to blockchain transaction for ledger accounts without
     * blockchain address assigned to them.<br/>
     * This operation needs the private key of the blockchain address. Every time the funds are
     * transferred, the transaction must be signed with the corresponding private key.
     * No one should ever send it's own private keys to the internet because there is a strong
     * possibility of stealing keys and losing funds. In this method, it is possible to enter
     * privateKey
     * or signatureId. PrivateKey should be used only for quick development on testnet versions
     * of blockchain when there is no risk of losing funds. In production,
     * <a href="https://github.com/tatumio/tatum-kms" target="_blank">Tatum KMS</a> should be
     * used for the highest security standards, and signatureId should be present in the
     * request.
     * Alternatively, using the Tatum client library for supported languages.
     * </p>
     *
     *
     * @summary Send ONE from a virtual account to the blockchain
     * @throws FetchError<400, types.OneTransferResponse400> Bad Request
     * @throws FetchError<401, types.OneTransferResponse401> Unauthorized. Not valid or inactive subscription key present in the HTTP Header.
     * @throws FetchError<403, types.OneTransferResponse403> Forbidden. The request is authenticated, but it is not possible to required perform
     * operation due to logical error or invalid permissions.
     * @throws FetchError<500, types.OneTransferResponse500> Internal server error. There was an error on the server during the processing of the
     * request.
     */
    SDK.prototype.oneTransfer = function (body, metadata) {
        return this.core.fetch('/v3/offchain/one/transfer', 'post', body, metadata);
    };
    /**
     * <p><b>This method is deprecated.<br/>Use <a href="#operation/registerErc20Token">this
     * method</a> instead.</b></p><br/>
     * <h4>2 credits per API call.</h4>
     * <p>First step to create new HRM20 token with given supply on ONE blockchain with support
     * of Tatum's private ledger.<br/>
     * <br/>
     * <br/>
     * This method only creates Tatum Private ledger virtual currency with predefined
     * parameters. It will not generate any blockchain smart contract.<br/>
     * The whole supply of HRM20 token is stored in the customer's newly created account. Then
     * it is possible to create new Tatum accounts with HRM20 token name as account's
     * currency.<br/>
     * Newly created account is frozen until the specific HRM20 smart contract address is
     * linked with the Tatum virtual currency, representing the token.<br/>
     * Order of the steps to create HRM20 smart contract with Tatum private ledger support:
     * <ol>
     * <li><a href="#operation/registerErc20Token">Register HRM20 token</a> - creates a virtual
     * currency within Tatum</li>
     * <li><a href="#operation/Erc20Deploy">Deploy HRM20 smart contract</a> - create new HRM20
     * smart contract on the blockchain</li>
     * <li><a href="#operation/storeTokenAddress">Store HRM20 smart contract address</a> - link
     * newly created HRM20 smart contract address with Tatum virtual currency - this operation
     * enables frozen account and enables ledger synchronization for HRM20 Tatum accounts</li>
     * </ol>
     * There is a helper method <a href="#operation/Erc20Deploy">Deploy ONE HRM20 Smart
     * Contract to Blockchain and Ledger</a>, which wraps first 2 steps into 1 method.<br/>
     * Address on the blockchain, where all initial supply will be transferred, can be defined
     * via the address or xpub and derivationIndex. When xpub is present, the account connected
     * to this virtualCurrency will be set as the account's xpub.
     * </p>
     *
     *
     * @summary Register a new Harmony HRM-20 token in the virtual account
     * @throws FetchError<400, types.CreateHrm20Response400> Bad Request
     * @throws FetchError<401, types.CreateHrm20Response401> Unauthorized. Not valid or inactive subscription key present in the HTTP Header.
     * @throws FetchError<403, types.CreateHrm20Response403> Forbidden. The request is authenticated, but it is not possible to required perform
     * operation due to logical error or invalid permissions.
     * @throws FetchError<500, types.CreateHrm20Response500> Internal server error. There was an error on the server during the processing of the
     * request.
     */
    SDK.prototype.createHrm20 = function (body) {
        return this.core.fetch('/v3/offchain/one/hrm20', 'post', body);
    };
    /**
     * <p><b>4 credits per API call</b></p>
     * <p>Deploy a Harmony HRM-20 smart contract. This is a helper method, which is combination
     * of
     * <a href="#operation/registerErc20Token">Register new HRM20 token in the ledger</a> and
     * <a
     * href="https://apidoc.tatum.io/tag/Fungible-Tokens-(ERC-20-or-compatible)#operation/Erc20Deploy">Deploy
     * blockchain ERC20</a>.</p>
     * <p>After deploying a contract to blockchain, the contract address will become available
     * and must be stored within Tatum. Otherwise, it will not be possible to interact with it
     * and starts automatic blockchain synchronization.</p>
     * <p><b>Signing a transaction</b><br/>
     * When deploying a Harmony HRM-20 smart contract to the blockchain and a virtual account,
     * you are charged a fee for the transaction, and you must sign the transaction with the
     * private key of the blockchain address from which the fee will be deducted.</p>
     * <p>Providing the private key in the API is not a secure way of signing transactions,
     * because the private key can be stolen or exposed. Your private keys should never leave
     * your security perimeter. You should use the private keys only for testing a solution you
     * are building on the <b>testnet</b> of a blockchain.</p>
     * <p>For signing transactions on the <b>mainnet</b>, we strongly recommend that you use
     * the Tatum <a href="https://github.com/tatumio/tatum-kms" target="_blank">Key Management
     * System (KMS)</a> and provide the signature ID instead of the private key in the API.
     * Alternatively, you can use the <a href="https://github.com/tatumio/tatum-js/tree/v2"
     * target="_blank">Tatum JavaScript client</a>.</p>
     *
     *
     * @summary Deploy a Harmony HRM-20 smart contract to the blockchain and a virtual account
     * @throws FetchError<400, types.OneDeployHrm20Response400> Bad Request
     * @throws FetchError<401, types.OneDeployHrm20Response401> Unauthorized. Not valid or inactive subscription key present in the HTTP Header.
     * @throws FetchError<403, types.OneDeployHrm20Response403> Forbidden. The request is authenticated, but it is not possible to required perform
     * operation due to logical error or invalid permissions.
     * @throws FetchError<500, types.OneDeployHrm20Response500> Internal server error. There was an error on the server during the processing of the
     * request.
     */
    SDK.prototype.oneDeployHrm20 = function (body, metadata) {
        return this.core.fetch('/v3/offchain/one/hrm20/deploy', 'post', body, metadata);
    };
    /**
     * <h4>2 credits per API call.</h4><br/>
     * <p>This is the first step to create a new ERC-20 or ERC-20 equivalent token with some
     * supply in a virtual account.<br/>
     * <br/>
     * <br/>
     * This method only creates Tatum Private ledger virtual currency with predefined
     * parameters. It will not generate any blockchain smart contract.<br/>
     * The whole supply of token is stored in the customer's newly created account. Then it is
     * possible to create new Tatum accounts with token name as account's currency.<br/>
     * Newly created account is frozen until the specific smart contract address is linked with
     * the Tatum virtual currency, representing the token.<br/>
     * Order of the steps to create smart contract with Tatum private ledger support:
     * <ol>
     * <li>Register token (this API) - creates a virtual currency within Tatum</li>
     * <li><a
     * href="https://apidoc.tatum.io/tag/Fungible-Tokens-(ERC-20-or-compatible)#operation/Erc20Deploy">Deploy
     * smart contract</a> - create new smart contract on the blockchain</li>
     * <li><a href="#operation/storeTokenAddress">Store smart contract address</a> - link newly
     * created smart contract address with Tatum virtual currency - this operation enables
     * frozen account and enables ledger synchronization for Tatum accounts</li>
     * </ol>
     * Blockchain address will be assigned to the virtual account as a deposit address. It can
     * be defined via the address explicitly or by using xpub and derivationIndex.
     * </p>
     *
     *
     * @summary Register a new ERC-20 or ERC-20-equivalent token in the virtual account
     * @throws FetchError<400, types.RegisterErc20TokenResponse400> Bad Request
     * @throws FetchError<401, types.RegisterErc20TokenResponse401> Unauthorized. Not valid or inactive subscription key present in the HTTP Header.
     * @throws FetchError<403, types.RegisterErc20TokenResponse403> Forbidden. The request is authenticated, but it is not possible to required perform
     * operation due to logical error or invalid permissions.
     * @throws FetchError<500, types.RegisterErc20TokenResponse500> Internal server error. There was an error on the server during the processing of the
     * request.
     */
    SDK.prototype.registerErc20Token = function (body, metadata) {
        return this.core.fetch('/v3/offchain/token/{chain}', 'post', body, metadata);
    };
    /**
     * <p><b>2 credits per API call</b></p>
     * <p>Set the contract address of an ERC-20, ERC-20-equivalent (for example, BEP-20,
     * HRM-20, and so on), or TRC-10 token to be able to communicate with the smart
     * contract.</p>
     * <p>After creating and deploying the token to the blockchain, the smart contract address
     * is generated and must be set within Tatum. If the address is not set, the Tatum platform
     * will not be able to detect incoming deposits of the tokens and transfer the tokens from
     * virtual accounts to blockchain addresses.</p>
     * <p><b>NOTE:</b></p>
     * <ul>
     * <li>For <b>Algorand</b>, the contract address is the asset ID (<code>assetId</code>),
     * for example, <code>55351976</code>.</li>
     * <li>For <b>TRON</b>, the contract address is the token ID (<code>tokenId</code>), for
     * example, <code>1234567</code>.</li>
     * </ul>
     *
     *
     * @summary Set the contract address of an ERC-20, ERC-20-equivalent, or TRC-10 token
     * @throws FetchError<400, types.StoreTokenAddressResponse400> Bad Request
     * @throws FetchError<401, types.StoreTokenAddressResponse401> Unauthorized. Not valid or inactive subscription key present in the HTTP Header.
     * @throws FetchError<403, types.StoreTokenAddressResponse403> Forbidden. The request is authenticated, but it is not possible to required perform
     * operation due to logical error or invalid permissions.
     * @throws FetchError<500, types.StoreTokenAddressResponse500> Internal server error. There was an error on the server during the processing of the
     * request.
     */
    SDK.prototype.storeTokenAddress = function (metadata) {
        return this.core.fetch('/v3/offchain/token/{name}/{address}', 'post', metadata);
    };
    /**
     * <h4>4 credits per API call.</h4><br/>
     * <p>Send CELO (Celo), ERC-20-equivalent Celo tokens, cUSD, or cEUR from a virtual account
     * to the blockchain. This will create Tatum internal withdrawal request with ID. If every
     * system works as expected, withdrawal request is marked as complete and transaction id is
     * assigned to it.
     * <br/>
     * <br/>
     * <ul>
     * <li>If Celo server connection is unavailable, withdrawal request is cancelled.</li>
     * <li>If blockchain transfer is successful, but is it not possible to reach Tatum,
     * transaction id of blockchain transaction is returned and withdrawal request must be
     * completed manually, otherwise all other withdrawals will be pending.</li>
     * </ul>
     * It is possible to perform ledger to blockchain transaction for ledger accounts without
     * blockchain address assigned to them.<br/>
     * This operation needs the private key of the blockchain address. Every time the funds are
     * transferred, the transaction must be signed with the corresponding private key.
     * No one should ever send it's own private keys to the internet because there is a strong
     * possibility of stealing keys and losing funds. In this method, it is possible to enter
     * privateKey
     * or signatureId. PrivateKey should be used only for quick development on testnet versions
     * of blockchain when there is no risk of losing funds. In production,
     * <a href="https://github.com/tatumio/tatum-kms" target="_blank">Tatum KMS</a> should be
     * used for the highest security standards, and signatureId should be present in the
     * request.
     * Alternatively, using the Tatum client library for supported languages.
     * </p>
     *
     *
     * @summary Send CELO from a virtual account to the blockchain
     * @throws FetchError<400, types.CeloOrErc20TransferResponse400> Bad Request
     * @throws FetchError<401, types.CeloOrErc20TransferResponse401> Unauthorized. Not valid or inactive subscription key present in the HTTP Header.
     * @throws FetchError<403, types.CeloOrErc20TransferResponse403> Forbidden. The request is authenticated, but it is not possible to required perform
     * operation due to logical error or invalid permissions.
     * @throws FetchError<500, types.CeloOrErc20TransferResponse500> Internal server error. There was an error on the server during the processing of the
     * request.
     */
    SDK.prototype.celoOrErc20Transfer = function (body) {
        return this.core.fetch('/v3/offchain/celo/transfer', 'post', body);
    };
    /**
     * <p><b>This method is deprecated.<br/>Use <a href="#operation/registerErc20Token">this
     * method</a> instead.</b></p><br/>
     * <h4>2 credits per API call.</h4>
     * <p>First step to create new ERC-20 token with given supply on Celo blockchain with
     * support of Tatum's private ledger.<br/>
     * <br/>
     * <br/>
     * This method only creates Tatum Private ledger virtual currency with predefined
     * parameters. It will not generate any blockchain smart contract.<br/>
     * The whole supply of ERC-20 token is stored in the customer's newly created account. Then
     * it is possible to create new Tatum accounts with ERC-20 token name as account's
     * currency.<br/>
     * Newly created account is frozen until the specific ERC-20 smart contract address is
     * linked with the Tatum virtual currency, representing the token.<br/>
     * Order of the steps to create ERC-20 smart contract with Tatum private ledger support:
     * <ol>
     * <li><a href="#operation/registerErc20Token">Register Celo ERC-20 token</a> - creates a
     * virtual currency within Tatum</li>
     * <li><a href="#operation/CeloDeployErc20">Deploy Celo ERC-20 smart contract</a> - create
     * new ERC-20 smart contract on the blockchain</li>
     * <li><a href="#operation/storeTokenAddress">Store Celo ERC-20 smart contract address</a>
     * - link newly created ERC-20 smart contract address with Tatum virtual currency - this
     * operation enables frozen account and enables ledger synchronization for ERC-20 Tatum
     * accounts</li>
     * </ol>
     * There is a helper method <a href="#operation/CeloDeployErc20Ledger">Deploy Celo ERC-20
     * Smart Contract to Blockchain and Ledger</a>, which wraps first 2 steps into 1
     * method.<br/>
     * Address on the blockchain, where all initial supply will be transferred, can be defined
     * via the address or xpub and derivationIndex. When xpub is present, the account connected
     * to this virtualCurrency will be set as the account's xpub.
     * </p>
     *
     *
     * @summary Register a new Celo ERC-20-equivalent token in the virtual account
     * @throws FetchError<400, types.CreateCeloErc20Response400> Bad Request
     * @throws FetchError<401, types.CreateCeloErc20Response401> Unauthorized. Not valid or inactive subscription key present in the HTTP Header.
     * @throws FetchError<403, types.CreateCeloErc20Response403> Forbidden. The request is authenticated, but it is not possible to required perform
     * operation due to logical error or invalid permissions.
     * @throws FetchError<500, types.CreateCeloErc20Response500> Internal server error. There was an error on the server during the processing of the
     * request.
     */
    SDK.prototype.createCeloErc20 = function (body) {
        return this.core.fetch('/v3/offchain/celo/erc20', 'post', body);
    };
    /**
     * <p><b>4 credits per API call</b></p>
     * <p>Deploy a Celo ERC-20-equivalent smart contract. This is a helper method, which is
     * combination of
     * <a href="#operation/registerErc20Token">Register new Celo ERC-20 token in the ledger</a>
     * and <a
     * href="https://apidoc.tatum.io/tag/Fungible-Tokens-(ERC-20-or-compatible)#operation/Erc20Deploy">Deploy
     * blockchain ERC20</a>.</p>
     * <p>After deploying a contract to blockchain, the contract address will become available
     * and must be stored within Tatum. Otherwise, it will not be possible to interact with it
     * and starts automatic blockchain synchronization.</p>
     * <p><b>Signing a transaction</b><br/>
     * When deploying a Celo ERC-20-equivalent smart contract to the blockchain and a virtual
     * account, you are charged a fee for the transaction, and you must sign the transaction
     * with the private key of the blockchain address from which the fee will be deducted.</p>
     * <p>Providing the private key in the API is not a secure way of signing transactions,
     * because the private key can be stolen or exposed. Your private keys should never leave
     * your security perimeter. You should use the private keys only for testing a solution you
     * are building on the <b>testnet</b> of a blockchain.</p>
     * <p>For signing transactions on the <b>mainnet</b>, we strongly recommend that you use
     * the Tatum <a href="https://github.com/tatumio/tatum-kms" target="_blank">Key Management
     * System (KMS)</a> and provide the signature ID instead of the private key in the API.
     * Alternatively, you can use the <a href="https://github.com/tatumio/tatum-js/tree/v2"
     * target="_blank">Tatum JavaScript client</a>.</p>
     *
     *
     * @summary Deploy a Celo ERC-20-equivalent smart contract to the blockchain and a virtual account
     * @throws FetchError<400, types.CeloDeployErc20LedgerResponse400> Bad Request
     * @throws FetchError<401, types.CeloDeployErc20LedgerResponse401> Unauthorized. Not valid or inactive subscription key present in the HTTP Header.
     * @throws FetchError<403, types.CeloDeployErc20LedgerResponse403> Forbidden. The request is authenticated, but it is not possible to required perform
     * operation due to logical error or invalid permissions.
     * @throws FetchError<500, types.CeloDeployErc20LedgerResponse500> Internal server error. There was an error on the server during the processing of the
     * request.
     */
    SDK.prototype.celoDeployErc20Ledger = function (body) {
        return this.core.fetch('/v3/offchain/celo/erc20/deploy', 'post', body);
    };
    /**
     * <p><b>4 credits per API call</b></p>
     * <p>Deploy a KuCoin Community Chain (KCC) ERC-20-equivalent smart contract. This is a
     * helper method, which is combination of
     * <a href="#operation/registerErc20Token">Register new Kcs ERC20 token in the ledger</a>
     * and <a
     * href="https://apidoc.tatum.io/tag/Fungible-Tokens-(ERC-20-or-compatible)#operation/Erc20Deploy">Deploy
     * blockchain ERC20</a>.</p>
     * <p>After deploying a contract to blockchain, the contract address will become available
     * and must be stored within Tatum. Otherwise, it will not be possible to interact with it
     * and starts automatic blockchain synchronization.</p>
     * <p><b>Signing a transaction</b><br/>
     * When deploying a KCC ERC-20-equivalent smart contract to the blockchain and a virtual
     * account, you are charged a fee for the transaction, and you must sign the transaction
     * with the private key of the blockchain address from which the fee will be deducted.</p>
     * <p>Providing the private key in the API is not a secure way of signing transactions,
     * because the private key can be stolen or exposed. Your private keys should never leave
     * your security perimeter. You should use the private keys only for testing a solution you
     * are building on the <b>testnet</b> of a blockchain.</p>
     * <p>For signing transactions on the <b>mainnet</b>, we strongly recommend that you use
     * the Tatum <a href="https://github.com/tatumio/tatum-kms" target="_blank">Key Management
     * System (KMS)</a> and provide the signature ID instead of the private key in the API.
     * Alternatively, you can use the <a href="https://github.com/tatumio/tatum-js/tree/v2"
     * target="_blank">Tatum JavaScript client</a>.</p>
     *
     *
     * @summary Deploy a KuCoin Community Chain (KCC) ERC-20-equivalent smart contract to the blockchain
     * and a virtual account
     * @throws FetchError<400, types.KcsDeployErc20LedgerResponse400> Bad Request
     * @throws FetchError<401, types.KcsDeployErc20LedgerResponse401> Unauthorized. Not valid or inactive subscription key present in the HTTP Header.
     * @throws FetchError<403, types.KcsDeployErc20LedgerResponse403> Forbidden. The request is authenticated, but it is not possible to required perform
     * operation due to logical error or invalid permissions.
     * @throws FetchError<500, types.KcsDeployErc20LedgerResponse500> Internal server error. There was an error on the server during the processing of the
     * request.
     */
    SDK.prototype.kcsDeployErc20Ledger = function (body) {
        return this.core.fetch('/v3/offchain/kcs/erc20/deploy', 'post', body);
    };
    /**
     * <p><b>This method is deprecated.<br/>Use <a href="#operation/storeTokenAddress">this
     * method</a> instead.</b></p><br/>
     * <h4>2 credits per API call.</h4>
     *
     *
     * @summary Set the contract address of a Celo ERC-20-equivalent token
     * @throws FetchError<400, types.StoreCeloErc20AddressResponse400> Bad Request
     * @throws FetchError<401, types.StoreCeloErc20AddressResponse401> Unauthorized. Not valid or inactive subscription key present in the HTTP Header.
     * @throws FetchError<403, types.StoreCeloErc20AddressResponse403> Forbidden. The request is authenticated, but it is not possible to required perform
     * operation due to logical error or invalid permissions.
     * @throws FetchError<500, types.StoreCeloErc20AddressResponse500> Internal server error. There was an error on the server during the processing of the
     * request.
     */
    SDK.prototype.storeCeloErc20Address = function (metadata) {
        return this.core.fetch('/v3/offchain/celo/erc20/{name}/{address}', 'post', metadata);
    };
    /**
     * <p><b>10 credits per API call</b></p>
     * <p>Send SOL (Solana), USDC_SOL, or custom SPL tokens from a virtual account to the
     * blockchain. This will create Tatum internal withdrawal request with ID. When every
     * system works as expected,
     * withdrawal request is marked as complete and transaction id is assigned to it.</p>
     * <ul>
     * <li>If SOL server connection is unavailable, withdrawal request is cancelled.</li>
     * <li>If blockchain transfer is successful, but is it not possible to reach Tatum,
     * transaction id of blockchain transaction is returned and withdrawal request must be
     * completed manually, otherwise all other withdrawals will be pending.</li>
     * </ul>
     * <p>It is possible to perform ledger to blockchain transaction for ledger accounts
     * without blockchain address assigned to them.</p>
     * <p>This operation needs the private key of the blockchain address. Every time the funds
     * are transferred, the transaction must be signed with the corresponding private key.
     * No one should ever send it's own private keys to the internet because there is a strong
     * possibility of stealing keys and losing funds. In this method, it is possible to enter
     * privateKey
     * or signatureId. PrivateKey should be used only for quick development on testnet versions
     * of blockchain when there is no risk of losing funds. In production,
     * <a href="https://github.com/tatumio/tatum-kms" target="_blank">Tatum KMS</a> should be
     * used for the highest security standards, and signatureId should be present in the
     * request.
     * Alternatively, using the Tatum client library for supported languages.
     * </p>
     *
     *
     * @summary Send SOL from a virtual account to the blockchain
     * @throws FetchError<400, types.SolTransferResponse400> Bad Request
     * @throws FetchError<401, types.SolTransferResponse401> Unauthorized. Not valid or inactive subscription key present in the HTTP Header.
     * @throws FetchError<403, types.SolTransferResponse403> Forbidden. The request is authenticated, but it is not possible to required perform
     * operation due to logical error or invalid permissions.
     * @throws FetchError<500, types.SolTransferResponse500> Internal server error. There was an error on the server during the processing of the
     * request.
     */
    SDK.prototype.solTransfer = function (body) {
        return this.core.fetch('/v3/offchain/solana/transfer', 'post', body);
    };
    /**
     * <p><b>10 credits per API call</b></p>
     * <p>Send XLM (Stellar) or XLM-based assets from a virtual account to the blockchain. This
     * will create Tatum internal withdrawal request with ID. When every system works as
     * expected,
     * withdrawal request is marked as complete and transaction id is assigned to it.</p>
     * <ul>
     * <li>If XLM server connection is unavailable, withdrawal request is cancelled.</li>
     * <li>If blockchain transfer is successful, but is it not possible to reach Tatum,
     * transaction id of blockchain transaction is returned and withdrawal request must be
     * completed manually, otherwise all other withdrawals will be pending.</li>
     * </ul>
     * <p>It is possible to perform ledger to blockchain transaction for ledger accounts
     * without blockchain address assigned to them.</p>
     * <p>This operation needs the private key of the blockchain address. Every time the funds
     * are transferred, the transaction must be signed with the corresponding private key.
     * No one should ever send it's own private keys to the internet because there is a strong
     * possibility of stealing keys and losing funds. In this method, it is possible to enter
     * privateKey
     * or signatureId. PrivateKey should be used only for quick development on testnet versions
     * of blockchain when there is no risk of losing funds. In production,
     * <a href="https://github.com/tatumio/tatum-kms" target="_blank">Tatum KMS</a> should be
     * used for the highest security standards, and signatureId should be present in the
     * request.
     * Alternatively, using the Tatum client library for supported languages.
     * </p>
     *
     *
     * @summary Send XLM from a virtual account to the blockchain
     * @throws FetchError<400, types.XlmTransferResponse400> Bad Request
     * @throws FetchError<401, types.XlmTransferResponse401> Unauthorized. Not valid or inactive subscription key present in the HTTP Header.
     * @throws FetchError<403, types.XlmTransferResponse403> Forbidden. The request is authenticated, but it is not possible to required perform
     * operation due to logical error or invalid permissions.
     * @throws FetchError<500, types.XlmTransferResponse500> Internal server error. There was an error on the server during the processing of the
     * request.
     */
    SDK.prototype.xlmTransfer = function (body) {
        return this.core.fetch('/v3/offchain/xlm/transfer', 'post', body);
    };
    /**
     * <h4>2 credits per API call.</h4><br/>
     * <p>Create an XLM-based asset in a virtual account. The asset must be created and
     * configured on the Stellar blockchain before <a
     * href="https://apidoc.tatum.io/tag/Stellar#operation/XlmTrustLineBlockchain">creating a
     * trust line</a>.</p>
     * <p>This API call will create an internal virtual currency. You can create virtual
     * accounts with off-chain support.</p>
     *
     *
     * @summary Create an XLM-based asset
     * @throws FetchError<400, types.XlmAssetOffchainResponse400> Bad Request
     * @throws FetchError<401, types.XlmAssetOffchainResponse401> Unauthorized. Not valid or inactive subscription key present in the HTTP Header.
     * @throws FetchError<403, types.XlmAssetOffchainResponse403> Forbidden. The request is authenticated, but it is not possible to required perform
     * operation due to logical error or invalid permissions.
     * @throws FetchError<500, types.XlmAssetOffchainResponse500> Internal server error. There was an error on the server during the processing of the
     * request.
     */
    SDK.prototype.xlmAssetOffchain = function (body) {
        return this.core.fetch('/v3/offchain/xlm/asset', 'post', body);
    };
    /**
     * <h4>10 credits per API call.</h4><br/><p>
     * <p>Send XRP from a virtual account to the blockchain. This will create Tatum internal
     * withdrawal request with ID. When every system works as expected, withdrawal request is
     * marked as complete and transaction id is assigned to it.
     * <ul>
     * <li>If XRP server connection is unavailable, withdrawal request is cancelled.</li>
     * <li>If blockchain transfer is successful, but is it not possible to reach Tatum,
     * transaction id of blockchain transaction is returned and withdrawal request must be
     * completed manually, otherwise all other withdrawals will be pending.</li>
     * </ul>
     * It is possible to perform ledger to blockchain transaction for ledger accounts without
     * blockchain address assigned to them.<br/>
     * This operation needs the private key of the blockchain address. Every time the funds are
     * transferred, the transaction must be signed with the corresponding private key.
     * No one should ever send it's own private keys to the internet because there is a strong
     * possibility of stealing keys and losing funds. In this method, it is possible to enter
     * privateKey
     * or signatureId. PrivateKey should be used only for quick development on testnet versions
     * of blockchain when there is no risk of losing funds. In production,
     * <a href="https://github.com/tatumio/tatum-kms" target="_blank">Tatum KMS</a> should be
     * used for the highest security standards, and signatureId should be present in the
     * request.
     * Alternatively, using the Tatum client library for supported languages.
     * </p>
     *
     *
     * @summary Send XRP from a virtual account to the blockchain
     * @throws FetchError<400, types.XrpTransferResponse400> Bad Request
     * @throws FetchError<401, types.XrpTransferResponse401> Unauthorized. Not valid or inactive subscription key present in the HTTP Header.
     * @throws FetchError<403, types.XrpTransferResponse403> Forbidden. The request is authenticated, but it is not possible to required perform
     * operation due to logical error or invalid permissions.
     * @throws FetchError<500, types.XrpTransferResponse500> Internal server error. There was an error on the server during the processing of the
     * request.
     */
    SDK.prototype.xrpTransfer = function (body) {
        return this.core.fetch('/v3/offchain/xrp/transfer', 'post', body);
    };
    /**
     * <h4>2 credits per API call.</h4><br/><p>
     * <p>Create an XRP-based asset in a virtual account. The asset must be created and
     * configured on the XRPL blockchain before <a
     * href="https://apidoc.tatum.io/tag/XRP#operation/XrpTrustLineBlockchain">creating a trust
     * line</a>.</p>
     * <p>This API call will create an internal virtual currency. You can create virtual
     * accounts with off-chain support.</p>
     *
     *
     * @summary Create XRP based Asset
     * @throws FetchError<400, types.XrpAssetOffchainResponse400> Bad Request
     * @throws FetchError<401, types.XrpAssetOffchainResponse401> Unauthorized. Not valid or inactive subscription key present in the HTTP Header.
     * @throws FetchError<403, types.XrpAssetOffchainResponse403> Forbidden. The request is authenticated, but it is not possible to required perform
     * operation due to logical error or invalid permissions.
     * @throws FetchError<500, types.XrpAssetOffchainResponse500> Internal server error. There was an error on the server during the processing of the
     * request.
     */
    SDK.prototype.xrpAssetOffchain = function (body) {
        return this.core.fetch('/v3/offchain/xrp/asset', 'post', body);
    };
    /**
     * <h4>10 credits per API call.</h4><br/><p>
     * <p>Send BNB (BNB Beacon Chain) or BNB assets from a virtual account to the blockchain.
     * This will create Tatum internal withdrawal request with ID. When every system works as
     * expected,
     * withdrawal request is marked as complete and transaction id is assigned to it.
     * <ul>
     * <li>If BNB server connection is unavailable, withdrawal request is cancelled.</li>
     * <li>If blockchain transfer is successful, but is it not possible to reach Tatum,
     * transaction id of blockchain transaction is returned and withdrawal request must be
     * completed manually, otherwise all other withdrawals will be pending.</li>
     * </ul>
     * It is possible to perform ledger to blockchain transaction for ledger accounts without
     * blockchain address assigned to them.<br/>
     * This operation needs the private key of the blockchain address. Every time the funds are
     * transferred, the transaction must be signed with the corresponding private key.
     * No one should ever send it's own private keys to the internet because there is a strong
     * possibility of stealing keys and losing funds. In this method, it is possible to enter
     * privateKey
     * or signatureId. PrivateKey should be used only for quick development on testnet versions
     * of blockchain when there is no risk of losing funds. In production,
     * <a href="https://github.com/tatumio/tatum-kms" target="_blank">Tatum KMS</a> should be
     * used for the highest security standards, and signatureId should be present in the
     * request.
     * Alternatively, using the Tatum client library for supported languages.
     * </p>
     *
     *
     * @summary Send BNB from a virtual account to the blockchain
     * @throws FetchError<400, types.BnbTransferResponse400> Bad Request
     * @throws FetchError<401, types.BnbTransferResponse401> Unauthorized. Not valid or inactive subscription key present in the HTTP Header.
     * @throws FetchError<403, types.BnbTransferResponse403> Forbidden. The request is authenticated, but it is not possible to required perform
     * operation due to logical error or invalid permissions.
     * @throws FetchError<500, types.BnbTransferResponse500> Internal server error. There was an error on the server during the processing of the
     * request.
     */
    SDK.prototype.bnbTransfer = function (body) {
        return this.core.fetch('/v3/offchain/bnb/transfer', 'post', body);
    };
    /**
     * <h4>2 credits per API call.</h4><br/><p>
     * <p>Create a BNB-based asset in a virtual account. The asset must first be <a
     * href="https://docs.bnbchain.org/docs/beaconchain/learn/BEP8" target="_blank">created and
     * configured on BNB Beacon Chain blockhain</a>.</p>
     * <p>This API call will create an internal virtual currency. You can create virtual
     * accounts with off-chain support.</p>
     *
     *
     * @summary Create a BNB-based asset
     * @throws FetchError<400, types.BnbAssetOffchainResponse400> Bad Request
     * @throws FetchError<401, types.BnbAssetOffchainResponse401> Unauthorized. Not valid or inactive subscription key present in the HTTP Header.
     * @throws FetchError<403, types.BnbAssetOffchainResponse403> Forbidden. The request is authenticated, but it is not possible to required perform
     * operation due to logical error or invalid permissions.
     * @throws FetchError<500, types.BnbAssetOffchainResponse500> Internal server error. There was an error on the server during the processing of the
     * request.
     */
    SDK.prototype.bnbAssetOffchain = function (body) {
        return this.core.fetch('/v3/offchain/bnb/asset', 'post', body);
    };
    /**
     * <h4>10 credits per API call.</h4><p>Send ADA (Cardano) from a virtual account to the
     * blockchain. This will create Tatum internal withdrawal request with ID. If every system
     * works as expected, withdrawal request is marked as complete and transaction id is
     * assigned to it.
     * <ul>
     * <li>If ADA server connection is unavailable, withdrawal request is cancelled.</li>
     * <li>If blockchain transfer is successful, but is it not possible to reach Tatum,
     * transaction id of blockchain transaction is returned and withdrawal request must be
     * completed manually, otherwise all other withdrawals will be pending.</li>
     * </ul>
     * It is possible to perform ledger to blockchain transaction for ledger accounts without
     * blockchain address assigned to them.<br/>
     * This operation needs the private key of the blockchain address. Every time the funds are
     * transferred, the transaction must be signed with the corresponding private key.
     * No one should ever send it's own private keys to the internet because there is a strong
     * possibility of stealing keys and losing funds. In this method, it is possible to enter
     * privateKey
     * or signatureId. PrivateKey should be used only for quick development on testnet versions
     * of blockchain when there is no risk of losing funds. In production,
     * <a href="https://github.com/tatumio/tatum-kms" target="_blank">Tatum KMS</a> should be
     * used for the highest security standards, and signatureId should be present in the
     * request.
     * Alternatively, using the Tatum client library for supported languages.
     * </p>
     *
     *
     * @summary Send ADA from a virtual account to the blockchain
     * @throws FetchError<400, types.AdaTransferOffchainResponse400> Bad Request
     * @throws FetchError<401, types.AdaTransferOffchainResponse401> Unauthorized. Not valid or inactive subscription key present in the HTTP Header.
     * @throws FetchError<403, types.AdaTransferOffchainResponse403> Forbidden. The request is authenticated, but it is not possible to required perform
     * operation due to logical error or invalid permissions.
     * @throws FetchError<500, types.AdaTransferOffchainResponse500> Internal server error. There was an error on the server during the processing of the
     * request.
     */
    SDK.prototype.adaTransferOffchain = function (body) {
        return this.core.fetch('/v3/offchain/ada/transfer', 'post', body);
    };
    /**
     * <h4>10 credits per API call.</h4><br/><p>Send TRON or TRX assets from a virtual account
     * to the blockchain. This will create Tatum internal withdrawal request with ID. If every
     * system works as expected, withdrawal request is marked as complete and transaction id is
     * assigned to it.
     * <ul>
     * <li>If Tron server connection is unavailable, withdrawal request is cancelled.</li>
     * <li>If blockchain transfer is successful, but is it not possible to reach Tatum,
     * transaction id of blockchain transaction is returned and withdrawal request must be
     * completed manually, otherwise all other withdrawals will be pending.</li>
     * </ul>
     * It is possible to perform ledger to blockchain transaction for ledger accounts without
     * blockchain address assigned to them.<br/>
     * This operation needs the private key of the blockchain address. Every time the funds are
     * transferred, the transaction must be signed with the corresponding private key.
     * No one should ever send it's own private keys to the internet because there is a strong
     * possibility of stealing keys and losing funds. In this method, it is possible to enter
     * privateKey
     * or signatureId. PrivateKey should be used only for quick development on testnet versions
     * of blockchain when there is no risk of losing funds. In production,
     * <a href="https://github.com/tatumio/tatum-kms" target="_blank">Tatum KMS</a> should be
     * used for the highest security standards, and signatureId should be present in the
     * request.
     * Alternatively, using the Tatum client library for supported languages.
     * </p>
     *
     *
     * @summary Send TRON from a virtual account to the blockchain
     * @throws FetchError<400, types.TronTransferOffchainResponse400> Bad Request
     * @throws FetchError<401, types.TronTransferOffchainResponse401> Unauthorized. Not valid or inactive subscription key present in the HTTP Header.
     * @throws FetchError<403, types.TronTransferOffchainResponse403> Forbidden. The request is authenticated, but it is not possible to required perform
     * operation due to logical error or invalid permissions.
     * @throws FetchError<500, types.TronTransferOffchainResponse500> Internal server error. There was an error on the server during the processing of the
     * request.
     */
    SDK.prototype.tronTransferOffchain = function (body) {
        return this.core.fetch('/v3/offchain/tron/transfer', 'post', body);
    };
    /**
     * <h4>10 credits per API call.</h4><br/>
     * <p>First step to create new TRC 10/20 token with given supply on the Tron blockchain
     * with support of Tatum's private ledger.<br/>
     * This method only creates Tatum Private ledger virtual currency with predefined
     * parameters. It will not generate any blockchain smart contract.<br/>
     * The whole supply of TRC 10/20 token is stored in the customer's newly created account.
     * Then it is possible to create new Tatum accounts with TRC 10/20 token name as account's
     * currency.<br/>
     * Newly created account is frozen until the specific TRC 10/20 smart contract address is
     * linked with the Tatum virtual currency, representing the token.<br/>
     * Order of the steps to create TRC 10/20 smart contract with Tatum private ledger support:
     * <ol>
     * <li>Create TRC 10/20 token (this API) - creates a virtual currency within Tatum</li>
     * <li><a href="https://apidoc.tatum.io/tag/Tron#operation/TronCreateTrc10">Deploy TRC
     * 10</a> or <a href="https://apidoc.tatum.io/tag/Tron#operation/TronCreateTrc20">TRC 20
     * smart contract</a> - create new TRC 10/20 smart contract on the blockchain</li>
     * <li><a href="#operation/storeTokenAddress">Store TRC 10/20 smart contract address</a> -
     * link newly created TRC 10/20 smart contract address with Tatum virtual currency - this
     * operation enables frozen account and enables ledger synchronization for TRC 10/20 Tatum
     * accounts</li>
     * </ol>
     * Blockchain address will be assigned to the virtual account as a deposit address. It can
     * be defined via the address explicitly or by using xpub and derivationIndex.
     * There is a helper method <a href="#operation/TronDeployTrc">Deploy TRC 10/20 Smart
     * Contract to Blockchain and Ledger</a>, which wraps first 2 steps into 1 method.<br/>
     * </p>
     *
     *
     * @summary Register a new TRON TRC-10 or TRC-20 token in the virtual account
     * @throws FetchError<400, types.CreateTrcResponse400> Bad Request
     * @throws FetchError<401, types.CreateTrcResponse401> Unauthorized. Not valid or inactive subscription key present in the HTTP Header.
     * @throws FetchError<403, types.CreateTrcResponse403> Forbidden. The request is authenticated, but it is not possible to required perform
     * operation due to logical error or invalid permissions.
     * @throws FetchError<500, types.CreateTrcResponse500> Internal server error. There was an error on the server during the processing of the
     * request.
     */
    SDK.prototype.createTrc = function (body) {
        return this.core.fetch('/v3/offchain/tron/trc', 'post', body);
    };
    /**
     * <p><b>10 credits per API call</b></p>
     * <p>Deploy a TRON TRC-10 or TRC-20 smart contract. This is a helper method, which is
     * combination of
     * <a href="#operation/createTrc">Register new TRC-10/20 token in the ledger</a> and <a
     * href="https://apidoc.tatum.io/tag/Tron#operation/TronCreateTrc20">Deploy blockchain
     * TRC20</a> or <a href="https://apidoc.tatum.io/tag/Tron#operation/TronCreateTrc10">Deploy
     * blockchain TRC10</a>.</p>
     * <p>After deploying a contract to blockchain, the contract address will become available
     * and must be stored within Tatum. Otherwise, it will not be possible to interact with it
     * and starts automatic blockchain synchronization.</p>
     * <p><b>Signing a transaction</b><br/>
     * When deploying a TRON TRC-10 or TRC-20 smart contract to the blockchain and a virtual
     * account, you are charged a fee for the transaction, and you must sign the transaction
     * with the private key of the blockchain address from which the fee will be deducted.</p>
     * <p>Providing the private key in the API is not a secure way of signing transactions,
     * because the private key can be stolen or exposed. Your private keys should never leave
     * your security perimeter. You should use the private keys only for testing a solution you
     * are building on the <b>testnet</b> of a blockchain.</p>
     * <p>For signing transactions on the <b>mainnet</b>, we strongly recommend that you use
     * the Tatum <a href="https://github.com/tatumio/tatum-kms" target="_blank">Key Management
     * System (KMS)</a> and provide the signature ID instead of the private key in the API.
     * Alternatively, you can use the <a href="https://github.com/tatumio/tatum-js/tree/v2"
     * target="_blank">Tatum JavaScript client</a>.</p>
     *
     *
     * @summary Deploy a TRON TRC-10 or TRC-20 smart contract to the blockchain and a virtual account
     * @throws FetchError<400, types.TronDeployTrcResponse400> Bad Request
     * @throws FetchError<401, types.TronDeployTrcResponse401> Unauthorized. Not valid or inactive subscription key present in the HTTP Header.
     * @throws FetchError<403, types.TronDeployTrcResponse403> Forbidden. The request is authenticated, but it is not possible to required perform
     * operation due to logical error or invalid permissions.
     * @throws FetchError<500, types.TronDeployTrcResponse500> Internal server error. There was an error on the server during the processing of the
     * request.
     */
    SDK.prototype.tronDeployTrc = function (body) {
        return this.core.fetch('/v3/offchain/tron/trc/deploy', 'post', body);
    };
    /**
     * <p><b>This method is deprecated.<br/>Use <a href="#operation/storeTokenAddress">this
     * method</a> instead.</b></p><br/>
     * <h4>2 credits per API call.</h4>
     *
     *
     * @summary Set the contract address of a TRC-10 or TRC-20 token
     * @throws FetchError<400, types.StoreTrcAddressResponse400> Bad Request
     * @throws FetchError<401, types.StoreTrcAddressResponse401> Unauthorized. Not valid or inactive subscription key present in the HTTP Header.
     * @throws FetchError<403, types.StoreTrcAddressResponse403> Forbidden. The request is authenticated, but it is not possible to required perform
     * operation due to logical error or invalid permissions.
     * @throws FetchError<500, types.StoreTrcAddressResponse500> Internal server error. There was an error on the server during the processing of the
     * request.
     */
    SDK.prototype.storeTrcAddress = function (metadata) {
        return this.core.fetch('/v3/offchain/tron/trc/{name}/{address}', 'post', metadata);
    };
    /**
     * <h4>4 credits per API call.</h4><br/>
     * <p>Send EGLD from a virtual account to the blockchain. This will create Tatum internal
     * withdrawal request with ID. If every system works as expected, withdrawal request is
     * marked as complete and transaction id is assigned to it.
     * <br/>
     * <br/>
     * <ul>
     * <li>If server connection is unavailable, withdrawal request is cancelled.</li>
     * <li>If blockchain transfer is successful, but is it not possible to reach Tatum,
     * transaction id of blockchain transaction is returned and withdrawal request must be
     * completed manually, otherwise all other withdrawals will be pending.</li>
     * </ul>
     * It is possible to perform ledger to blockchain transaction for ledger accounts without
     * blockchain address assigned to them.<br/>
     * This operation needs the private key of the blockchain address. Every time the funds are
     * transferred, the transaction must be signed with the corresponding private key.
     * No one should ever send it's own private keys to the internet because there is a strong
     * possibility of stealing keys and losing funds. In this method, it is possible to enter
     * privateKey
     * or signatureId. PrivateKey should be used only for quick development on testnet versions
     * of blockchain when there is no risk of losing funds. In production,
     * <a href="https://github.com/tatumio/tatum-kms" target="_blank">Tatum KMS</a> should be
     * used for the highest security standards, and signatureId should be present in the
     * request.
     * Alternatively, using the Tatum client library for supported languages.
     * </p>
     *
     *
     * @summary Send EGLD from a virtual account to the blockchain
     * @throws FetchError<400, types.EgldTransferResponse400> Bad Request
     * @throws FetchError<401, types.EgldTransferResponse401> Unauthorized. Not valid or inactive subscription key present in the HTTP Header.
     * @throws FetchError<403, types.EgldTransferResponse403> Forbidden. The request is authenticated, but it is not possible to required perform
     * operation due to logical error or invalid permissions.
     * @throws FetchError<500, types.EgldTransferResponse500> Internal server error. There was an error on the server during the processing of the
     * request.
     */
    SDK.prototype.egldTransfer = function (body) {
        return this.core.fetch('/v3/offchain/egld/transfer', 'post', body);
    };
    /**
     * <p><b>4 credits per API call</b></p>
     * <p>Deploy an Algorand ERC-20-equivalent smart contract. This is a helper method, which
     * is combination of
     * <a href="#operation/registerErc20Token">Register new Algorand ERC20 token in the
     * ledger</a> and <a
     * href="https://apidoc.tatum.io/tag/Fungible-Tokens-(ERC-20-or-compatible)#operation/Erc20Deploy">Deploy
     * blockchain ERC20</a>.</p>
     * <p>After deploying a contract to blockchain, the contract address will become available
     * and must be stored within Tatum. Otherwise, it will not be possible to interact with it
     * and starts automatic blockchain synchronization.</p>
     * <p><b>Signing a transaction</b><br/>
     * When deploying an Algorand ERC-20-equivalent smart contract to the blockchain and a
     * virtual account, you are charged a fee for the transaction, and you must sign the
     * transaction with the private key of the blockchain address from which the fee will be
     * deducted.</p>
     * <p>Providing the private key in the API is not a secure way of signing transactions,
     * because the private key can be stolen or exposed. Your private keys should never leave
     * your security perimeter. You should use the private keys only for testing a solution you
     * are building on the <b>testnet</b> of a blockchain.</p>
     * <p>For signing transactions on the <b>mainnet</b>, we strongly recommend that you use
     * the Tatum <a href="https://github.com/tatumio/tatum-kms" target="_blank">Key Management
     * System (KMS)</a> and provide the signature ID instead of the private key in the API.
     * Alternatively, you can use the <a href="https://github.com/tatumio/tatum-js/tree/v2"
     * target="_blank">Tatum JavaScript client</a>.</p>
     *
     *
     * @summary Deploy an Algorand ERC-20-equivalent smart contract to the blockchain and a virtual
     * account
     * @throws FetchError<400, types.AlgoDeployErc20LedgerResponse400> Bad Request
     * @throws FetchError<401, types.AlgoDeployErc20LedgerResponse401> Unauthorized. Not valid or inactive subscription key present in the HTTP Header.
     * @throws FetchError<403, types.AlgoDeployErc20LedgerResponse403> Forbidden. The request is authenticated, but it is not possible to required perform
     * operation due to logical error or invalid permissions.
     * @throws FetchError<500, types.AlgoDeployErc20LedgerResponse500> Internal server error. There was an error on the server during the processing of the
     * request.
     */
    SDK.prototype.algoDeployErc20Ledger = function (body) {
        return this.core.fetch('/v3/offchain/algo/erc20/deploy', 'post', body);
    };
    /**
     * <p><b>4 credits per API call</b></p>
     * <p>Send Algos or ERC-20-equivalent Algorand tokens from a virtual account (even from a
     * virtual account without deposit addresses adssigned) to the Algorand blockchain.</p>
     * <p>The recipient has to agree in advance to receive assets because Algorand charges
     * users for storing assets on their addresses, and an Algorand blockchain address by
     * default does not receive assets unless explicitly agreed. Before sending any asset from
     * a virtual account to the blockchain, make sure that the recipient <a
     * href="https://apidoc.tatum.io/tag/Algorand#operation/AlgorandBlockchainReceiveAsset"
     * target="_blank">has agreed to receive the assets</a> to their address.</p>
     * <p>Sending Algorand assets creates an internal Tatum withdrawal request with an ID. If
     * everything works as expected, the withdrawal request is marked as complete and a
     * transaction ID is assigned to it.</p>
     * <ul>
     * <li>If a server connection is unavailable, the withdrawal request is cancelled.</li>
     * <li>If the transfer to the blockchain is successful, but the Tatum infrastructure cannot
     * be accesses, the ID of the blockchain transaction is returned and you have to <a
     * href="https://apidoc.tatum.io/tag/Withdrawal#operation/completeWithdrawal"
     * target="_blank">complete the withdrawal request manually</a>. Otherwise, all other
     * withdrawals will be pending.</li>
     * </ul>
     * <p><b>Signing a transaction</b><br/>
     * When sending Algos or ERC-20-equivalent Algorand tokens, you are charged a fee for the
     * transaction, and you must sign the transaction with the private key of the blockchain
     * address from which the fee will be deducted.</p>
     * <p>Providing the private key in the API is not a secure way of signing transactions,
     * because the private key can be stolen or exposed. Your private keys should never leave
     * your security perimeter. You should use the private keys only for testing a solution you
     * are building on the <b>testnet</b> of a blockchain.</p>
     * <p>For signing transactions on the <b>mainnet</b>, we strongly recommend that you use
     * the Tatum <a href="https://github.com/tatumio/tatum-kms" target="_blank">Key Management
     * System (KMS)</a> and provide the signature ID instead of the private key in the API.
     * Alternatively, you can use the <a href="https://github.com/tatumio/tatum-js/tree/v2"
     * target="_blank">Tatum JavaScript client</a>.</p>
     *
     *
     * @summary Send ALGO from a virtual account to the blockchain
     * @throws FetchError<400, types.AlgoTransferResponse400> Bad Request
     * @throws FetchError<401, types.AlgoTransferResponse401> Unauthorized. Not valid or inactive subscription key present in the HTTP Header.
     * @throws FetchError<403, types.AlgoTransferResponse403> Forbidden. The request is authenticated, but it is not possible to required perform
     * operation due to logical error or invalid permissions.
     * @throws FetchError<500, types.AlgoTransferResponse500> Internal server error. There was an error on the server during the processing of the
     * request.
     */
    SDK.prototype.algoTransfer = function (body) {
        return this.core.fetch('/v3/offchain/algorand/transfer', 'post', body);
    };
    return SDK;
}());
var createSDK = (function () { return new SDK(); })();
module.exports = createSDK;
